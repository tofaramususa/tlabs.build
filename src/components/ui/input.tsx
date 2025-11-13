import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full bg-transparent px-0 pb-0.5 text-base md:text-lg lg:text-xl font-light tracking-tight text-foreground transition-colors",
          "border-b border-foreground/30",
          "placeholder:text-muted-foreground/50 placeholder:font-light",
          "focus-visible:outline-none focus-visible:border-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
