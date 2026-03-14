import { useEffect } from "react";
import { contentByLang } from "@/content";
import { useLanguage } from "@/features/language/useLanguage";
import { useTheme } from "@/features/theme/useTheme";
import { MainLayout } from "@/shared/layout/MainLayout";
import { AppRouterProvider } from "@/app/router";
export default function App() {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const content = contentByLang[lang];
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = content.dir; }, [lang, content.dir]);
  return <MainLayout content={content} lang={lang} onLangChange={setLang} onThemeToggle={toggleTheme} themeLabel={theme === "dark" ? content.common.lightMode : content.common.darkMode}><AppRouterProvider /></MainLayout>;
}
