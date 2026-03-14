import { z } from "zod";
import { apiGet } from "@/shared/api/client";

export const servicePackageResponseSchema = z.object({
  code: z.string(),
  title: z.string(),
  description: z.string(),
  priceLabel: z.string(),
  displayBdt: z.string().optional(),
  inclusions: z.array(z.string()),
  category: z.enum(["manpower", "student"]),
});

export type ServicePackageResponse = z.infer<typeof servicePackageResponseSchema>;

export async function getPublicServices(): Promise<ServicePackageResponse[]> {
  return apiGet("/services/public", z.array(servicePackageResponseSchema));
}
