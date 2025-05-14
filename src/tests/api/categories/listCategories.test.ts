// tests/api/categories/getAll.test.ts
import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/categories/route";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("GET /api/categories", () => {
  it("should return 200 with a list of categories", async () => {
    await prisma.category.deleteMany();
    await prisma.category.createMany({
      data: [
        { name: "TDD Books" },
        { name: "TDD Art" },
        { name: "TDD Food" },
      ],
    });

    const req = new NextRequest("http://localhost/api/categories", { method: "GET" });

    const res = await GET(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(Array.isArray(json)).toBe(true);
    expect(json.length).toBeGreaterThanOrEqual(3);

    for (const category of json) {
      expect(category).toHaveProperty("id");
      expect(category).toHaveProperty("name");
    }
  });

  it("should return 200 with an empty array if no categories exist", async () => {
    // // Limpiar todas las categorías
    await prisma.category.deleteMany();

    const req = new NextRequest("http://localhost/api/categories", { method: "GET" });

    const res = await GET(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(Array.isArray(json)).toBe(true);
    expect(json.length).toBe(0);
  });
});
