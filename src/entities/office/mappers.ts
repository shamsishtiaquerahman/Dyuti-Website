import type { OfficeContent } from "@/shared/schemas/content.schema";
import type { OfficeEntity } from "./model";
export function mapOfficeContentToEntity(input: OfficeContent, id: string): OfficeEntity { return { id, ...input }; }
