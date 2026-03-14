import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("api schemas", () => {
  it("validates a simple response shape", () => {
    const schema = z.object({ ok: z.boolean() });
    expect(schema.parse({ ok: true })).toEqual({ ok: true });
  });
});
