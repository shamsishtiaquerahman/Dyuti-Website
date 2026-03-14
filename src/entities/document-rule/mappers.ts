import type { DocumentRuleEntity } from "./model";
export function mapDocumentLabelToEntity(label: string, id: string, category: "manpower" | "student"): DocumentRuleEntity { return { id, label, category }; }
