import type { PackageContent } from "@/shared/schemas/content.schema";
import type { ServicePackage } from "./model";
export function mapPackageContentToServicePackage(input: PackageContent, category: "manpower" | "student", code: string): ServicePackage {
  return { code, title: input.title, description: input.description, priceLabel: input.price, displayBdt: input.bdt, inclusions: input.includes, category };
}
