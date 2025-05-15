// tests/api/categories/getAll.test.ts
import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "@/app/api/products/route";

describe("GET /api/products", () => {
  it("should return 200 with a list of products", async () => {

    const req = new NextRequest("http://localhost/api/products", { method: "GET" });

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