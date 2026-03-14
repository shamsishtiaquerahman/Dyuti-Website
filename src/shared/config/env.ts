import { z } from "zod";

const envSchema = z.object({
  VITE_APP_URL: z.string().url().optional(),
  VITE_API_BASE_URL: z.string().url().optional(),
  VITE_ENVIRONMENT: z.enum(["development", "production", "test"]).optional(),
});

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
  throw new Error(`Invalid environment configuration: ${parsed.error.message}`);
}

const isDev = import.meta.env.DEV;
const environment = parsed.data.VITE_ENVIRONMENT ?? (isDev ? "development" : "production");

function getRequiredUrl(value: string | undefined, name: string, fallback?: string): string {
  if (value) return value;
  if (fallback) return fallback;
  throw new Error(`Missing required environment variable: ${name}`);
}

export const env = {
  appName: "DYUTI Group",
  environment,
  isDevelopment: environment === "development",
  isProduction: environment === "production",
  appUrl: getRequiredUrl(parsed.data.VITE_APP_URL, "VITE_APP_URL", isDev ? "http://localhost:5173" : undefined),
  apiBaseUrl: getRequiredUrl(parsed.data.VITE_API_BASE_URL, "VITE_API_BASE_URL", isDev ? "http://localhost:3000/api" : undefined),
} as const;
