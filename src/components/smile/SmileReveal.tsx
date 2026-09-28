"use client";

import type { ReactNode } from "react";

import { useReveal } from "./useReveal";

export function SmileReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
