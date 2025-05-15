import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/users/route";
import { NextRequest } from "next/server";

describe("GET /api/users", () => {
  it("should list all users", async () => {
    const req = new NextRequest("http://localhost/api/users", { method: "GET" });
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
