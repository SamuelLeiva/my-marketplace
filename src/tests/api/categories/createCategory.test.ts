// tests/api/category/createCategory.test.ts
import { describe, it, expect } from "vitest";
import { POST } from "@/app/api/categories/route";
import { createMockRequest } from "@/tests/utils/testApp";
import { NextRequest, NextResponse } from "next/server";

describe("POST /api/categories", () => {
  it("should return 201 with created category", async () => {
    const req: NextRequest = createMockRequest("POST", "http://localhost/api/categories", {
      name: "TDD Category 2", // este input dejará de ser valido una vez se cree el primer test por la misma validación
    });

    const res: NextResponse = await POST(req);

    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json).toHaveProperty("id");
    expect(json.name).toBe("TDD Category 2");
  });

  it("should return 400 on invalid input", async () => {
    const req = createMockRequest("POST", "http://localhost/api/categories", {
      name: "", // input invalid
    });

    const res = await POST(req);

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toHaveProperty("error");
  });
});
