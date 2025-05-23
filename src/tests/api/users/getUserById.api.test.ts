import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/users/[id]/route";
import { NextRequest } from "next/server";
import { USER_ID } from "@/tests/constants";

function createContext(id: string) {
  return { params: { id } };
}

describe("GET /api/users/:id", () => {
  it("should return user by id", async () => {
    const req = new NextRequest(`http://localhost/api/users/${USER_ID}`, { method: "GET" });
    const res = await GET(req, createContext(USER_ID));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty("id");
    expect(json).toHaveProperty("email");
  });

  it("should return 404 if user not found", async () => {
    const req = new NextRequest("http://localhost/api/users/non-existent", { method: "GET" });
    const res = await GET(req, createContext("non-existent"));
    expect(res.status).toBe(404);
  });
});
