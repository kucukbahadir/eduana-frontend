import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  orientation = "horizontal",
  ...props
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        orientation === "horizontal" 
          ? "h-2 w-full" 
          : "h-full w-2", 
        "bg-primary/20 relative overflow-hidden rounded-full",
        className
      )}
      {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary-button flex-1 transition-all"
        style={
          orientation === "horizontal"
            ? { 
                height: "100%", 
                width: "100%", 
                transform: `translateX(-${100 - (value || 0)}%)` 
              }
            : {
                height: "100%", 
                width: "100%", 
                transform: `translateY(${100 - (value || 0)}%)`
              }
        } />
    </ProgressPrimitive.Root>
  );
}

export { Progress }
