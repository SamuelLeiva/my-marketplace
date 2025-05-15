// tests/api/categories/getAll.test.ts
import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/categories/route";
import { NextRequest } from "next/server";

describe("GET /api/categories", () => {
  it("should return 200 with a list of categories", async () => {

    const req = new NextRequest("http://localhost/api/categories", { method: "GET" });

    const res = await GET(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(Array.isArray(json)).toBe(true);
    expect(json.length).toBeGreaterThanOrEqual(1);

    for (const category of json) {
      expect(category).toHaveProperty("id");
      expect(category).toHaveProperty("name");
    }
  });
});
