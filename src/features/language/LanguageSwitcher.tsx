import type { Lang } from "@/shared/types/common";
import { contentByLang } from "@/content";
export function LanguageSwitcher({ current, onChange }: { current: Lang; onChange: (lang: Lang) => void }) {
  return <div className="flex flex-wrap gap-2">{(Object.keys(contentByLang) as Lang[]).map((code) => <button key={code} onClick={() => onChange(code)} className={`rounded-2xl px-4 py-2 text-sm transition ${current === code ? "bg-dyutiTeal text-slate-950" : "bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"}`}>{contentByLang[code].langName}</button>)}</div>;
}
