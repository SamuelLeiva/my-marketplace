import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "@/app/api/products/by-seller/[seller-id]/route";
import { USER_ID } from "@/tests/constants";

function createContext(id: string) {
  return { params: { sellerId: id } };
}

describe("GET /api/products/seller/:id", () => {
  it("should return products for a seller", async () => {
    const req = new NextRequest(`http://localhost/api/products/by-seller/${USER_ID}`, { method: "GET" });
    const res = await GET(req, createContext(USER_ID));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(Array.isArray(json)).toBe(true);
    expect(json.length).toBeGreaterThanOrEqual(1);
  });

  it("should return 404 if seller not found", async () => {
    const req = new NextRequest("http://localhost/api/products/by-seller/invalid-id", { method: "GET" });
    const res = await GET(req, createContext("invalid-id"));
    expect(res.status).toBe(404);
  });
});
