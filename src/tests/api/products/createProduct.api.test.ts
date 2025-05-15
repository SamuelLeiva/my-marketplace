import { describe, it, expect } from "vitest";
import { POST } from "@/app/api/products/route";
import { createMockRequest } from "@/tests/utils/testApp";
import { NextRequest, NextResponse } from "next/server";
import { CATEGORY_ID, USER_ID } from "@/tests/constants";

describe("POST /api/products", () => {
  it("should return 201 with created product", async () => {
    const uniqueName = `TDD Product ${crypto.randomUUID()}`; // genera nombre único
    const req: NextRequest = createMockRequest(
      "POST",
      "http://localhost/api/products",
      {
        name: uniqueName,
        sellerId: USER_ID,
        description: "Product description",
        price: 5000,
        imageUrl: "https://example.com/img.jpg",
        categoryId: CATEGORY_ID,
      }
    );

    const res: NextResponse = await POST(req);

    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json).toHaveProperty("id");
    expect(json.name).toBe(uniqueName);
  });

  it("should return 400 on invalid input", async () => {
    const req = createMockRequest("POST", "http://localhost/api/products", {
      name: "", // input invalid
    });

    const res = await POST(req);

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toHaveProperty("error");
  });
});
