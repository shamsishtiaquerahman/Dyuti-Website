import { describe, expect, it } from "vitest";
import { contentByLang } from "@/content";

describe("content validation", () => {
  it("has all required language packs", () => {
    expect(Object.keys(contentByLang)).toEqual(["en", "bn", "ar"]);
  });

  it("has manpower packages in all languages", () => {
    for (const content of Object.values(contentByLang)) {
      expect(content.manpower.packages.length).toBeGreaterThan(0);
    }
  });
});
