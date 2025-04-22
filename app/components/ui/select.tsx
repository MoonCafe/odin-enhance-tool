"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export const Select = SelectPrimitive.Root

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm text-black shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <SelectPrimitive.Value />
    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = "SelectTrigger"

export const SelectValue = SelectPrimitive.Value

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      sideOffset={4} // 가까운 위치
      className={cn(
        "relative z-50 max-h-60 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-black shadow-md animate-in fade-in-80",
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = "SelectContent"

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100",
      className
    )}
    {...props}
  >
    <span className="mr-2 h-3 w-3 flex items-center justify-center text-muted-foreground">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-3 w-3" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = "SelectItem"
