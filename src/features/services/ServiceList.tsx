import type { ServicePackage } from "@/entities/service/model";
import { ServiceCard } from "./ServiceCard";
export function ServiceList({ items, convertLabel, hideLabel }: { items: ServicePackage[]; convertLabel: string; hideLabel: string }) {
  return <div className="grid gap-6 lg:grid-cols-2">{items.map((item) => <ServiceCard key={item.code} item={item} convertLabel={convertLabel} hideLabel={hideLabel} />)}</div>;
}
