import { useMemo, useState, type ReactNode } from "react";
import type { Lang } from "@/shared/types/common";
import { LanguageContext } from "@/app/providers/language-context";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
