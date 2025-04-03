import type { ComponentPropsWithoutRef, CSSProperties, FC } from "react"
import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "relative mx-auto max-w-md text-white",

        // Shine effect
        "animate-shiny-text bg-clip-text bg-[length:200%_auto] bg-no-repeat",

        // Shine gradient
        "bg-gradient-to-r from-transparent via-white/90 to-transparent",

        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
} 