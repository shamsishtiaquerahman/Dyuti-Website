import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" };
export function Button({ className, variant = "primary", ...props }: Props) {
  const variants = {
    primary: "bg-dyutiOrange text-slate-950 hover:opacity-90",
    secondary: "bg-dyutiTeal text-slate-950 hover:opacity-90",
    ghost: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
  };
  return <button className={cn("rounded-2xl px-5 py-3 text-sm font-semibold transition", variants[variant], className)} {...props} />;
}
