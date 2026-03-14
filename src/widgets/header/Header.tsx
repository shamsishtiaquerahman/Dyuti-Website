import { Link, NavLink } from "react-router-dom";
import type { Lang } from "@/shared/types/common";
import type { SiteContent } from "@/shared/schemas/content.schema";
import { ROUTES } from "@/shared/constants/routes";
import { Container } from "@/shared/ui/Container";
import { LanguageSwitcher } from "@/features/language/LanguageSwitcher";
import { ThemeToggle } from "@/features/theme/ThemeToggle";

export function Header({ content, lang, onLangChange, onThemeToggle, themeLabel }: { content: SiteContent; lang: Lang; onLangChange: (lang: Lang) => void; onThemeToggle: () => void; themeLabel: string }) {
  const nav = content.common.nav;
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link to={ROUTES.home} className="flex items-center gap-4">
          <div className="rounded-2xl bg-white p-2 shadow-lg"><img src="/logo.jpeg" alt="DYUTI logo" className="h-12 w-auto rounded-xl" /></div>
          <div><p className="text-2xl font-semibold tracking-[0.18em] text-dyutiOrange">DYUTI</p><p className="text-sm text-slate-600 dark:text-slate-400">{content.common.brandTag}</p></div>
        </Link>
        <div className="flex flex-col items-end gap-3">
          <div className="flex flex-wrap gap-2"><LanguageSwitcher current={lang} onChange={onLangChange} /><ThemeToggle label={themeLabel} onToggle={onThemeToggle} /></div>
          <nav className="flex flex-wrap gap-2 text-sm">
            {[[ROUTES.home, nav.home],[ROUTES.manpower, nav.manpower],[ROUTES.student, nav.student],[ROUTES.documents, nav.documents],[ROUTES.contact, nav.contact]].map(([to,label]) => <NavLink key={to} to={to} className={({isActive}) => `rounded-2xl px-4 py-2 transition ${isActive ? "bg-dyutiTeal text-slate-950" : "bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"}`}>{label}</NavLink>)}
          </nav>
        </div>
      </Container>
    </header>
  );
}
