import type { DocumentRuleEntity } from "@/entities/document-rule/model";
export function DocumentList({ items }: { items: DocumentRuleEntity[] }) {
  return <div className="grid gap-4 sm:grid-cols-2">{items.map((item) => <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">{item.label}</div>)}</div>;
}
