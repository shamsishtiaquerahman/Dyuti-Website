import type { SiteContent } from "@/shared/schemas/content.schema";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/constants/routes";
import { SectionShell } from "@/shared/layout/SectionShell";
import { Card } from "@/shared/ui/Card";
import { SectionTitle } from "@/shared/ui/SectionTitle";
export function ServicesPreviewSection({ content }: { content: SiteContent }) {
  return <SectionShell><SectionTitle title={content.home.coreTitle} description={content.home.coreText} /><div className="mt-10 grid gap-6 lg:grid-cols-2"><Link to={ROUTES.manpower}><Card className="h-full"><h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{content.common.nav.manpower}</h3><p className="mt-3 text-slate-700 dark:text-slate-300">{content.manpower.text}</p></Card></Link><Link to={ROUTES.student}><Card className="h-full"><h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{content.common.nav.student}</h3><p className="mt-3 text-slate-700 dark:text-slate-300">{content.student.text}</p></Card></Link></div></SectionShell>;
}
