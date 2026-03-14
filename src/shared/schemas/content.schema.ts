import { z } from "zod";
export const officeSchema = z.object({ title: z.string(), city: z.string(), address: z.string(), zip: z.string(), whatsappLabel: z.string(), whatsapp: z.string(), waLink: z.string() });
export const packageSchema = z.object({ title: z.string(), price: z.string(), bdt: z.string().optional(), description: z.string(), includes: z.array(z.string()) });
export const waiverPackageSchema = z.object({ name: z.string(), price: z.string(), bdt: z.string(), firstPayment: z.string(), secondPayment: z.string() });
export const faqSchema = z.object({ q: z.string(), a: z.string() });
export const siteContentSchema = z.object({
  dir: z.enum(["ltr","rtl"]),
  langName: z.string(),
  common: z.object({
    nav: z.object({ home: z.string(), manpower: z.string(), student: z.string(), documents: z.string(), contact: z.string() }),
    brandTag: z.string(), officeTag: z.string(), locationsLabel: z.string(), locations: z.array(z.string()),
    footerText: z.string(), email: z.string(), address: z.string(), zipCode: z.string(), messageOffice: z.string(),
    whatsappFloating: z.string(), lightMode: z.string(), darkMode: z.string(), convertToBdt: z.string(), hideBdt: z.string(),
    offices: z.array(officeSchema)
  }),
  home: z.object({
    heroBadge: z.string(), heroTitle: z.string(), heroText: z.string(),
    exploreManpower: z.string(), exploreStudent: z.string(), requiredDocuments: z.string(),
    featuredPackage: z.string(), deliveryName: z.string(), featuredIncluded: z.string(), coreTitle: z.string(), coreText: z.string()
  }),
  manpower: z.object({
    title: z.string(), text: z.string(), docsTitle: z.string(), timelineTitle: z.string(), timelineText: z.string(),
    paymentTitle: z.string(), paymentText: z.string(), packages: z.array(packageSchema), docs: z.array(z.string()), policies: z.array(z.string())
  }),
  student: z.object({
    title: z.string(), text: z.string(), tuitionTitle: z.string(), tuitionText: z.string(), docsTitle: z.string(),
    timelineTitle: z.string(), timelineText: z.string(), importantConditions: z.string(),
    scholarshipRules: z.string(), scholarshipRulesText: z.string(), services: z.array(z.string()), docs: z.array(z.string()),
    waiverPackages: z.array(waiverPackageSchema), policies: z.array(z.string()), scholarshipRulesList: z.array(z.string())
  }),
  documents: z.object({ title: z.string(), text: z.string() }),
  contact: z.object({ title: z.string(), text: z.string(), faqTitle: z.string(), faqText: z.string(), faqs: z.array(faqSchema) })
});
export type SiteContent = z.infer<typeof siteContentSchema>;
export type OfficeContent = z.infer<typeof officeSchema>;
export type PackageContent = z.infer<typeof packageSchema>;
export type FaqContent = z.infer<typeof faqSchema>;
