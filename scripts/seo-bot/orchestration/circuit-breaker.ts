import type { CircuitBreaker as CircuitBreakerConfig } from "../types";

export interface CircuitState {
  todaysShipped: { pages: number; blogs: number };
  todaysCost: number;
  todaysErrors: number;
}

export interface CircuitCheck {
  allowed: boolean;
  reason?: string;
}

export class CircuitBreaker {
  private readonly config: CircuitBreakerConfig;
  private readonly state: CircuitState;
  private halted: boolean;
  private haltReason?: string;

  constructor(config: CircuitBreakerConfig, state: CircuitState) {
    this.config = config;
    this.state = {
      todaysShipped: {
        pages: state.todaysShipped.pages,
        blogs: state.todaysShipped.blogs,
      },
      todaysCost: state.todaysCost,
      todaysErrors: state.todaysErrors,
    };
    this.halted = false;
  }

  getState(): CircuitState {
    return {
      todaysShipped: { ...this.state.todaysShipped },
      todaysCost: this.state.todaysCost,
      todaysErrors: this.state.todaysErrors,
    };
  }

  isHalted(): boolean {
    return this.halted;
  }

  getHaltReason(): string | undefined {
    return this.haltReason;
  }

  /**
   * Pre-flight checks before a run starts. Halts the run if any limit is
   * already exceeded from prior activity.
   */
  preRunChecks(): CircuitCheck {
    if (this.state.todaysCost >= this.config.maxCostPerDayUSD) {
      const reason = `Cost budget already exhausted: $${this.state.todaysCost.toFixed(4)} >= $${this.config.maxCostPerDayUSD.toFixed(2)}`;
      this.halt(reason);
      return { allowed: false, reason };
    }
    if (this.state.todaysErrors >= this.config.maxApiErrorsBeforeHalt) {
      const reason = `API error threshold reached: ${this.state.todaysErrors} >= ${this.config.maxApiErrorsBeforeHalt}`;
      this.halt(reason);
      return { allowed: false, reason };
    }
    return { allowed: true };
  }

  canShipPage(): CircuitCheck {
    if (this.halted) {
      return { allowed: false, reason: this.haltReason ?? "Halted" };
    }
    if (this.state.todaysShipped.pages >= this.config.maxPagesPerDay) {
      return {
        allowed: false,
        reason: `Page ship limit reached (${this.state.todaysShipped.pages}/${this.config.maxPagesPerDay}).`,
      };
    }
    return { allowed: true };
  }

  canShipBlog(): CircuitCheck {
    if (this.halted) {
      return { allowed: false, reason: this.haltReason ?? "Halted" };
    }
    if (this.state.todaysShipped.blogs >= this.config.maxBlogsPerDay) {
      return {
        allowed: false,
        reason: `Blog ship limit reached (${this.state.todaysShipped.blogs}/${this.config.maxBlogsPerDay}).`,
      };
    }
    return { allowed: true };
  }

  canSpend(amountUSD: number): CircuitCheck {
    if (this.halted) {
      return { allowed: false, reason: this.haltReason ?? "Halted" };
    }
    const projected = this.state.todaysCost + amountUSD;
    if (projected > this.config.maxCostPerDayUSD) {
      return {
        allowed: false,
        reason: `Cost budget would be exceeded ($${projected.toFixed(4)} > $${this.config.maxCostPerDayUSD.toFixed(2)}).`,
      };
    }
    return { allowed: true };
  }

  recordCost(amountUSD: number): void {
    if (amountUSD <= 0) return;
    this.state.todaysCost += amountUSD;
    if (this.state.todaysCost >= this.config.maxCostPerDayUSD) {
      this.halt(
        `Cost cap reached after spend: $${this.state.todaysCost.toFixed(4)} >= $${this.config.maxCostPerDayUSD.toFixed(2)}`
      );
    }
  }

  recordError(): { halted: boolean } {
    this.state.todaysErrors += 1;
    if (this.state.todaysErrors >= this.config.maxApiErrorsBeforeHalt) {
      this.halt(
        `Consecutive error threshold reached: ${this.state.todaysErrors} >= ${this.config.maxApiErrorsBeforeHalt}`
      );
      return { halted: true };
    }
    return { halted: false };
  }

  recordShip(type: "page" | "blog"): void {
    if (type === "page") {
      this.state.todaysShipped.pages += 1;
    } else {
      this.state.todaysShipped.blogs += 1;
    }
  }

  private halt(reason: string): void {
    if (this.halted) return;
    this.halted = true;
    this.haltReason = reason;
  }
}
