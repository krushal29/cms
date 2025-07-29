"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Utility function (same as cn from lib/utils)
function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(" ")
}

export function Pagination({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("flex items-center justify-between", className)}
      {...props}
    />
  )
}

export function PaginationContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  )
}

export function PaginationItem({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("", className)} {...props} />
  )
}

const PaginationLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      aria-current={props["aria-current"]}
      className={cn(
        "px-3 py-1 text-sm border rounded-md hover:bg-muted transition-colors",
        className
      )}
      {...props}
    />
  )
})
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <PaginationLink
      ref={ref}
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      Previous
    </PaginationLink>
  )
})
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <PaginationLink
      ref={ref}
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      Next
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  )
})
PaginationNext.displayName = "PaginationNext"

export {
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
