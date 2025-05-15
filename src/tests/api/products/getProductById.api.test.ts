import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { PRODUCT_ID } from "@/tests/constants";
import { GET } from "@/app/api/products/[id]/route";

function createContext(id: string) {
  return {
    params: { id },
  };
}

describe("GET /api/products/:id", () => {
  it("should get product by id", async () => {
    const req = new NextRequest(`http://localhost/api/products/${PRODUCT_ID}`, { method: "GET" });

    const res = await GET(req, createContext(PRODUCT_ID));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty("id");
    expect(json).toHaveProperty("name");
  });

  it("should return 404 if product not found", async () => {
    const req = new NextRequest("http://localhost/api/products/non-existent-id", { method: "GET" });

    const res = await GET(req, createContext("non-existent-id"));
    expect(res.status).toBe(404);
    const json = await res.json();
    expect(json).toHaveProperty("error", "Product not found");
  });
});
