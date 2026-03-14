import type { Lang } from "@/shared/types/common";
import { siteContentSchema, type SiteContent } from "@/shared/schemas/content.schema";
import { commonEn } from "./en/common"; import { homeEn } from "./en/home"; import { manpowerEn } from "./en/manpower"; import { studentEn } from "./en/student-consultancy"; import { documentsEn } from "./en/documents"; import { contactEn } from "./en/contact";
import { commonBn } from "./bn/common"; import { homeBn } from "./bn/home"; import { manpowerBn } from "./bn/manpower"; import { studentBn } from "./bn/student-consultancy"; import { documentsBn } from "./bn/documents"; import { contactBn } from "./bn/contact";
import { commonAr } from "./ar/common"; import { homeAr } from "./ar/home"; import { manpowerAr } from "./ar/manpower"; import { studentAr } from "./ar/student-consultancy"; import { documentsAr } from "./ar/documents"; import { contactAr } from "./ar/contact";
const parseContent = (input: unknown): SiteContent => siteContentSchema.parse(input);
export const contentByLang: Record<Lang, SiteContent> = {
  en: parseContent({ dir: "ltr", langName: "English", common: commonEn, home: homeEn, manpower: manpowerEn, student: studentEn, documents: documentsEn, contact: contactEn }),
  bn: parseContent({ dir: "ltr", langName: "বাংলা", common: commonBn, home: homeBn, manpower: manpowerBn, student: studentBn, documents: documentsBn, contact: contactBn }),
  ar: parseContent({ dir: "rtl", langName: "العربية", common: commonAr, home: homeAr, manpower: manpowerAr, student: studentAr, documents: documentsAr, contact: contactAr }),
};
