import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
export function Card({ children, className }: { children: ReactNode; className?: string }) { return <div className={cn("rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5", className)}>{children}</div>; }
