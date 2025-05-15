import { GET } from "@/app/api/users/email/[email]/route";
import { USER_EMAIL } from "@/tests/constants";
import { NextRequest } from "next/server";
import { describe, it, expect } from "vitest";

function createContext(email: string) {
  return {
    params: { email },
  };
}

describe("GET /api/users/email", () => {
    it("should return user by email", async () => {
      const req = new NextRequest(`http://localhost/api/users/email/${USER_EMAIL}`, { method: "GET" });
          const res = await GET(req, createContext(USER_EMAIL));
          expect(res.status).toBe(200);
          const json = await res.json();
          expect(json).toHaveProperty("id");
          expect(json).toHaveProperty("email");
    });

  it("should return 404 if user not found", async () => {
    const req = new NextRequest("http://localhost/api/users/nonexistentemail@gmail.com", {
      method: "GET",
    });
    const res = await GET(req, createContext("nonexistentemail@gmail.com"));
    expect(res.status).toBe(404);
  });
});
