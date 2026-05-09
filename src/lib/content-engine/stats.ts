/**
 * Real-time numbers from Prestyj's own /media-master usage.
 *
 * Update this file weekly with the latest numbers from the internal
 * media-master dashboard. Keep history in `weeklyHistory` for trend chart.
 */

export interface MediaMasterStats {
  /** Total posts shipped across all Prestyj-owned accounts since launch. */
  totalPostsShipped: number;
  /** Number of platforms currently being published to. */
  platformsActive: number;
  /** Number of days the system has been running (since launchDate). */
  daysRunning: number;
  /** Average posts shipped per day over the run. */
  averagePostsPerDay: number;
  /** ISO date the system went live. */
  launchDate: string;
  /** ISO date these numbers were last updated. */
  lastUpdated: string;
}

export interface WeeklyDatapoint {
  /** ISO date for the start of the week (Monday). */
  weekOf: string;
  /** Posts shipped in that week. */
  posts: number;
}

/**
 * Current snapshot. Update weekly.
 *
 * Source: internal /media-master dashboard.
 */
export const mediaMasterStats: MediaMasterStats = {
  totalPostsShipped: 4_812,
  platformsActive: 7,
  daysRunning: 92,
  averagePostsPerDay: 52,
  launchDate: "2026-02-06",
  lastUpdated: "2026-05-09",
};

/**
 * Last 8 weeks of post volume. Used by the dashboard chart.
 * Append the newest week to the end and trim from the front.
 */
export const weeklyHistory: WeeklyDatapoint[] = [
  { weekOf: "2026-03-16", posts: 287 },
  { weekOf: "2026-03-23", posts: 312 },
  { weekOf: "2026-03-30", posts: 341 },
  { weekOf: "2026-04-06", posts: 358 },
  { weekOf: "2026-04-13", posts: 372 },
  { weekOf: "2026-04-20", posts: 389 },
  { weekOf: "2026-04-27", posts: 401 },
  { weekOf: "2026-05-04", posts: 418 },
];

/** Active publishing platforms (kept in sync with platformsActive count). */
export const activePlatforms: string[] = [
  "Instagram",
  "Facebook",
  "TikTok",
  "YouTube",
  "LinkedIn",
  "Threads",
  "X",
];
