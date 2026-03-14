import type { ServicePackage } from "@/entities/service/model";
import { Card } from "@/shared/ui/Card";
import { PriceWithBdt } from "@/features/pricing/PriceWithBdt";
export function ServiceCard({ item, convertLabel, hideLabel }: { item: ServicePackage; convertLabel: string; hideLabel: string }) {
  return (
    <Card className="h-full">
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
      <p className="mt-3 text-slate-700 dark:text-slate-300">{item.description}</p>
      <div className="mt-5"><PriceWithBdt price={item.priceLabel} bdt={item.displayBdt} convertLabel={convertLabel} hideLabel={hideLabel} /></div>
      <div className="mt-6 space-y-3">{item.inclusions.map((inc) => <div key={inc} className="flex items-start gap-3 text-slate-700 dark:text-slate-300"><span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-dyutiTeal" /><span>{inc}</span></div>)}</div>
    </Card>
  );
}
