"use client"

import * as React from "react"
import { LinkIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  href?: string
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Resume", className, href = "https://drive.google.com/file/d/1ohDVKJDpkCqkvjICLomTDJ2nYrVN6dSe/view?usp=sharing", ...props }, ref) => {
  return (
    <button
      ref={ref}
      onClick={() => href && window.open(href, '_blank')}
      className={cn(
        "group relative gap-1 active:scale-90 ease-linear duration-100 cursor-pointer overflow-hidden rounded-md border border-white/10 bg-[#181717] px-10 py-3 select-none text-center font-semibold text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
        className
      )}
      {...props}
    >
      <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <LinkIcon className="h-4 w-4" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 transition-all duration-300 group-hover:h-[300%] group-hover:w-[300%] group-hover:bg-white/10"></div>
    </button>
  )
})

InteractiveHoverButton.displayName = "InteractiveHoverButton"

export default InteractiveHoverButton

