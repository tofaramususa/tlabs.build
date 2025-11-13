import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full bg-transparent px-0 pb-0.5 text-base md:text-lg lg:text-xl font-light tracking-tight text-foreground transition-colors",
          "border-b border-foreground/30",
          "placeholder:text-muted-foreground/50 placeholder:font-light",
          "focus-visible:outline-none focus-visible:border-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
