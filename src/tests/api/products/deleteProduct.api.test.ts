import { describe, it, expect } from "vitest";
import { DELETE } from "@/app/api/products/[id]/route";
import { NextRequest } from "next/server";
import { DELETE_PRODUCT_ID } from "@/tests/constants";

function createContext(id: string) {
  return { params: { id } };
}

describe("DELETE /api/products/:id", () => {
  it("should delete product by id", async () => {
    const req = new NextRequest(`http://localhost/api/products/${DELETE_PRODUCT_ID}`, { method: "DELETE" });
    const res = await DELETE(req, createContext(DELETE_PRODUCT_ID));
    expect([200, 204]).toContain(res.status);
  });

  it("should return 404 if product not found", async () => {
    const req = new NextRequest("http://localhost/api/products/non-existent", { method: "DELETE" });
    const res = await DELETE(req, createContext("non-existent-id"));
    expect(res.status).toBe(404);
  });
});
