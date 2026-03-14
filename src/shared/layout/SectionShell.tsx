import type { ReactNode } from "react";
import { Container } from "@/shared/ui/Container";
import { cn } from "@/shared/lib/cn";
export function SectionShell({ children, className, innerClassName }: { children: ReactNode; className?: string; innerClassName?: string }) {
  return <section className={className}><Container className={cn("py-16", innerClassName)}>{children}</Container></section>;
}
