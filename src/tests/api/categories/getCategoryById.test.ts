// tests/api/category/getById.test.ts
import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/categories/[id]/route";
import { NextRequest } from "next/server";

function createContext(id: string) {
  return {
    params: { id },
  };
}

describe("GET /api/categories/:id", () => {
  it("should return 404 if category not found", async () => {
    const req = new NextRequest("http://localhost/api/categories/not-found", { method: "GET" });

    const res = await GET(req, createContext("non-existent-id"));
    expect(res.status).toBe(404);
    const json = await res.json();
    expect(json).toHaveProperty("error", "Category not found");
  });
});
