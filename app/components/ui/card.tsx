import * as React from "react"

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border bg-card text-card-foreground shadow">{children}</div>
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
