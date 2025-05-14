// tests/api/category/getById.test.ts
import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/categories/[id]/route";
import { NextRequest } from "next/server";
import { CATEGORY_ID } from "@/tests/constants/ids";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function createContext(id: string) {
  return {
    params: { id },
  };
}

describe("GET /api/categories/:id", () => {
  it("should get category by id", async () => {
    await prisma.category.create({
        data: {
          id: CATEGORY_ID,
          name: "Default Category",
        },
      });
    const req = new NextRequest(`http://localhost/api/categories/${CATEGORY_ID}`, { method: "GET" });

    const res = await GET(req, createContext(CATEGORY_ID));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty("id");
    expect(json).toHaveProperty("name");
    expect(json.name).toBe("Default Category");
  });

  it("should return 404 if category not found", async () => {
    const req = new NextRequest("http://localhost/api/categories/not-found", { method: "GET" });

    const res = await GET(req, createContext("non-existent-id"));
    expect(res.status).toBe(404);
    const json = await res.json();
    expect(json).toHaveProperty("error", "Category not found");
  });
});
