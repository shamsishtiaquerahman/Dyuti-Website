import type { SiteContent } from "@/shared/schemas/content.schema";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/Button";
import { PageHero } from "@/shared/ui/PageHero";
import { PriceWithBdt } from "@/features/pricing/PriceWithBdt";

export function HeroSection({ content }: { content: SiteContent }) {
  return (
    <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_55%,#e2e8f0_100%)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_left,rgba(67,182,177,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(227,162,38,0.16),transparent_26%),linear-gradient(180deg,#08111f_0%,#0f172a_55%,#111827_100%)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div>
          <PageHero badge={content.home.heroBadge} title={content.home.heroTitle} description={content.home.heroText} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={ROUTES.manpower}><Button>{content.home.exploreManpower}</Button></Link>
            <Link to={ROUTES.student}><Button variant="ghost">{content.home.exploreStudent}</Button></Link>
            <Link to={ROUTES.documents}><Button variant="ghost">{content.home.requiredDocuments}</Button></Link>
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none"><div className="rounded-[28px] bg-gradient-to-br from-white to-slate-100 p-6 text-slate-900"><div className="flex items-center justify-between gap-4"><img src="/logo.jpeg" alt="DYUTI logo" className="h-20 w-auto rounded-2xl" /><div className="text-right"><p className="text-sm uppercase tracking-[0.2em] text-slate-500">{content.home.featuredPackage}</p><p className="text-lg font-bold text-dyutiOrange">{content.home.deliveryName}</p></div></div><div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white"><PriceWithBdt price="QAR 21,000" bdt="700,000" convertLabel={content.common.convertToBdt} hideLabel={content.common.hideBdt} /><p className="mt-3 text-sm leading-6 text-slate-300">{content.home.featuredIncluded}</p></div></div></div>
      </div>
    </section>
  );
}
