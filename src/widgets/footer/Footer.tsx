import type { SiteContent } from "@/shared/schemas/content.schema";
import { Container } from "@/shared/ui/Container";
export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950/70">
      <Container className="grid gap-8 py-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4"><div className="rounded-2xl bg-white p-2"><img src="/logo.jpeg" alt="DYUTI logo" className="h-12 w-auto rounded-xl" /></div><div><p className="text-xl font-semibold tracking-[0.18em] text-dyutiOrange">DYUTI</p><p className="text-sm text-slate-600 dark:text-slate-400">{content.common.officeTag}</p></div></div>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">{content.common.footerText}</p>
        </div>
        <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyutiTeal">{content.common.nav.contact}</p><div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300"><p>{content.common.offices[0]?.whatsappLabel}: {content.common.offices[0]?.whatsapp}</p><p>{content.common.offices[1]?.whatsappLabel}: {content.common.offices[1]?.whatsapp}</p><p>{content.common.email}: info@dyutigroup.net</p></div></div>
        <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-dyutiTeal">{content.common.locationsLabel}</p><div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">{content.common.locations.map((loc) => <p key={loc}>{loc}</p>)}</div></div>
      </Container>
    </footer>
  );
}
