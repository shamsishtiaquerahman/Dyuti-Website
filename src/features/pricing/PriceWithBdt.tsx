import { useState } from "react";
import { Button } from "@/shared/ui/Button";
export function PriceWithBdt({ price, bdt, convertLabel, hideLabel }: { price: string; bdt?: string; convertLabel: string; hideLabel: string }) {
  const [show, setShow] = useState(false);
  return <div className="space-y-3"><p className="text-3xl font-bold text-dyutiOrange">{price}</p>{bdt ? <><Button variant="secondary" className="px-4 py-2" onClick={() => setShow((v) => !v)}>{show ? hideLabel : convertLabel}</Button>{show ? <p className="text-lg font-semibold text-slate-900 dark:text-white">BDT {bdt}</p> : null}</> : null}</div>;
}
