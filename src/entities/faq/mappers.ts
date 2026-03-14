import type { FaqContent } from "@/shared/schemas/content.schema";
import type { FaqEntity } from "./model";
export function mapFaqContentToEntity(input: FaqContent, id: string): FaqEntity { return { id, question: input.q, answer: input.a }; }
