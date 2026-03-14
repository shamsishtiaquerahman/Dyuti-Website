import { useMemo } from "react";
import { contentByLang } from "@/content";
import { useLanguage } from "@/features/language/useLanguage";
export function useContent() { const { lang } = useLanguage(); return useMemo(() => contentByLang[lang], [lang]); }
