import { describe, it, expect } from "vitest";
import { POST } from "@/app/api/users/route";
import { NextRequest } from "next/server";
import { createMockRequest } from "@/tests/utils/testApp";

describe("POST /api/users", () => {
  it("should create a new user", async () => {
    const req: NextRequest = createMockRequest("POST", "http://localhost/api/users", {
      name: "Test User",
      email: "testuser@example.com",
      role: "buyer",
      password: "password123",
    });

    const res = await POST(req);
    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json).toHaveProperty("id");
    expect(json.name).toBe("Test User");
  });

  it("should return 400 on invalid input", async () => {
    const req: NextRequest = createMockRequest("POST", "http://localhost/api/users", {
      name: "",
      email: "invalid-email",
      role: "invalid-role",
      password: "",
    });
    
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});
