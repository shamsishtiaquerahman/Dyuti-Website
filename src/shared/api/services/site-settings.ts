import { z } from "zod";
import { apiGet } from "@/shared/api/client";

export const siteSettingsResponseSchema = z.object({
  email: z.string().email(),
  qatarWhatsApp: z.string(),
  bangladeshWhatsApp: z.string(),
});

export type SiteSettingsResponse = z.infer<typeof siteSettingsResponseSchema>;

export async function getSiteSettings(): Promise<SiteSettingsResponse> {
  return apiGet("/settings/public", siteSettingsResponseSchema);
}
