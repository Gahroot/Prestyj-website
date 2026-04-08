"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import SpotlightCard from "./spotlight-card";

interface BorderGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  edgeSensitivity?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
}

const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className,
  innerClassName,
  innerStyle,
  // Destructure legacy props so they don't pass through via ...rest
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  glowColor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  borderRadius,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  glowRadius,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  glowIntensity,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  coneSpread,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  edgeSensitivity,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  animated,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  colors,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fillOpacity,
  ...rest
}) => {
  return (
    <SpotlightCard
      spotlightColor="rgba(112, 88, 227, 0.25)"
      className={cn("border border-border bg-card rounded-xl", className)}
      {...rest}
    >
      <div className={innerClassName} style={innerStyle}>
        {children}
      </div>
    </SpotlightCard>
  );
};

export default BorderGlow;
