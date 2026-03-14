import type { FaqEntity } from "@/entities/faq/model";
import { Card } from "@/shared/ui/Card";
export function FaqList({ items }: { items: FaqEntity[] }) {
  return <div className="grid gap-4 lg:grid-cols-2">{items.map((item) => <Card key={item.id}><h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3><p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.answer}</p></Card>)}</div>;
}
