import { z } from "zod";
import { env } from "@/shared/config/env";

export class ApiError extends Error {
  readonly status: number;
  readonly path: string;
  readonly body: unknown;

  constructor(message: string, status: number, path: string, body?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.path = path;
    this.body = body;
  }
}

type RequestOptions = {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
  timeoutMs?: number;
  credentials?: RequestCredentials;
  signal?: AbortSignal;
};

async function parseJsonSafely(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return null;
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function withTimeout(timeoutMs: number, externalSignal?: AbortSignal) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  if (externalSignal) {
    externalSignal.addEventListener("abort", () => controller.abort(), { once: true });
  }

  return {
    signal: controller.signal,
    cleanup: () => clearTimeout(timeout),
  };
}

export async function apiRequest<T>(
  path: string,
  schema: z.ZodType<T>,
  options: RequestOptions = {},
): Promise<T> {
  const {
    method = "GET",
    body,
    headers = {},
    timeoutMs = 10000,
    credentials = "same-origin",
    signal,
  } = options;

  const { signal: timeoutSignal, cleanup } = withTimeout(timeoutMs, signal);

  try {
    const response = await fetch(`${env.apiBaseUrl}${path}`, {
      method,
      credentials,
      headers: {
        "Accept": "application/json",
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: timeoutSignal,
    });

    const parsedBody = await parseJsonSafely(response);

    if (!response.ok) {
      throw new ApiError(
        `Request failed: ${method} ${path} returned ${response.status}`,
        response.status,
        path,
        parsedBody,
      );
    }

    return schema.parse(parsedBody);
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error instanceof z.ZodError) {
      throw new Error(`API response validation failed for ${path}: ${error.message}`);
    }
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`Request timed out or was aborted: ${path}`);
    }
    throw error;
  } finally {
    cleanup();
  }
}

export async function apiGet<T>(
  path: string,
  schema: z.ZodType<T>,
  options?: Omit<RequestOptions, "method" | "body">,
): Promise<T> {
  return apiRequest(path, schema, { ...options, method: "GET" });
}

export async function apiPost<TRequest, TResponse>(
  path: string,
  body: TRequest,
  schema: z.ZodType<TResponse>,
  options?: Omit<RequestOptions, "method" | "body">,
): Promise<TResponse> {
  return apiRequest(path, schema, { ...options, method: "POST", body });
}
