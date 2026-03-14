import type { SiteContent } from "@/shared/schemas/content.schema";
import { SectionShell } from "@/shared/layout/SectionShell";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { ServiceList } from "@/features/services/ServiceList";
import { mapPackageContentToServicePackage } from "@/entities/service/mappers";
export function PackagesPreviewSection({ content }: { content: SiteContent }) {
  const items = content.manpower.packages.map((item, index) => mapPackageContentToServicePackage(item, "manpower", `manpower-${index+1}`));
  return <SectionShell className="border-y border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"><SectionTitle title={content.manpower.title} description={content.manpower.text} /><div className="mt-10"><ServiceList items={items} convertLabel={content.common.convertToBdt} hideLabel={content.common.hideBdt} /></div></SectionShell>;
}
