import type { ReactNode } from "react";
import type { Lang } from "@/shared/types/common";
import type { SiteContent } from "@/shared/schemas/content.schema";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { WhatsAppFloat } from "@/widgets/whatsapp-float/WhatsAppFloat";
export function MainLayout({ content, lang, onLangChange, onThemeToggle, themeLabel, children }: { content: SiteContent; lang: Lang; onLangChange: (lang: Lang) => void; onThemeToggle: () => void; themeLabel: string; children: ReactNode; }) {
  return <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-[#08111f] dark:text-white"><Header content={content} lang={lang} onLangChange={onLangChange} onThemeToggle={onThemeToggle} themeLabel={themeLabel} />{children}<Footer content={content} /><WhatsAppFloat label={content.common.whatsappFloating} /></div>;
}
