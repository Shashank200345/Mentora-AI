import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  height?: string;
}

export function GridBackground({
  children,
  className,
  height = "h-[50rem]",
}: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full items-center justify-center bg-[var(--bg-100)]", height, className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.15)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.15)_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--bg-100)] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      {children}
    </div>
  );
} 