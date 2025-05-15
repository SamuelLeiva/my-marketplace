import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { CATEGORY_ID } from '@/tests/constants';
import { GET } from "@/app/api/products/by-category/[category-id]/route";

function createContext(id: string) {
  return { params: { categoryId: id } };
}

describe("GET /api/products/category/:id", () => {
  it("should return products for a category", async () => {
    const req = new NextRequest(`http://localhost/api/products/by-category/${CATEGORY_ID}`, { method: "GET" });
    const res = await GET(req, createContext(CATEGORY_ID));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(Array.isArray(json)).toBe(true);
  });

  it("should return 404 if category not found", async () => {
    const req = new NextRequest("http://localhost/api/products/by-category/not-found", { method: "GET" });
    const res = await GET(req, createContext("not-found"));
    expect(res.status).toBe(404);
  });
});
