import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from '@/libs/utils';

interface BeautifulTooltipProps {
  children: React.ReactNode
  content: string
  side?: "top" | "right" | "bottom" | "left"
  color?: "primary" | "secondary" | "accent" | "muted"
  className?: string
}

const BeautifulTooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  BeautifulTooltipProps
>(({ children, content, side = "bottom", color = "primary", className, ...props }, ref) => {
  const colorVariants = {
    primary: "bg-[#5D1A75]  text-primary-foreground ",
    secondary: "bg-secondary text-white border-secondary shadow-lg  dark:bg-[#5D1A75] ",
    accent: "bg-accent text-accent-foreground border-accent/20 shadow-lg shadow-accent/20",
    muted: "bg-muted text-muted-foreground border-muted/20 shadow-lg shadow-muted/20"
  }

  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          ref={ref}
          side={side}
          sideOffset={4}
          align="center"
          className={cn(
            "z-50 overflow-hidden rounded-lg border px-3 py-2 text-sm font-medium",
            "animate-in text-white fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "backdrop-blur-sm shadow-xl",
            colorVariants[color],
            className
          )}
          {...props}
        >
          {content}
          <TooltipPrimitive.Arrow className={cn(
            "fill-current",
            color === "primary" && "text-primary",
            color === "secondary" && "text-white", 
            color === "accent" && "text-accent",
            color === "muted" && "text-muted"
          )} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
})

BeautifulTooltip.displayName = "BeautifulTooltip"

export { BeautifulTooltip }