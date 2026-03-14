import { Badge } from "@/shared/ui/Badge";
export function PageHero({ badge, title, description }: { badge?: string; title: string; description: string }) {
  return (
    <div>
      {badge ? <Badge>{badge}</Badge> : null}
      <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">{description}</p>
    </div>
  );
}
