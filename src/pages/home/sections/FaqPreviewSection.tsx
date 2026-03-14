import type { SiteContent } from "@/shared/schemas/content.schema";
import { SectionShell } from "@/shared/layout/SectionShell";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { FaqList } from "@/features/faq/FaqList";
import { mapFaqContentToEntity } from "@/entities/faq/mappers";
export function FaqPreviewSection({ content }: { content: SiteContent }) {
  const items = content.contact.faqs.map((item, index) => mapFaqContentToEntity(item, `faq-${index+1}`));
  return <SectionShell><SectionTitle title={content.contact.faqTitle} description={content.contact.faqText} /><div className="mt-10"><FaqList items={items} /></div></SectionShell>;
}
