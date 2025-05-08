
import { validateCreateUser } from "@/lib/validators"
import { describe, expect, it } from "vitest"

describe("validateCreateUser", () => {
  it("should validate correct user", () => {
    const input = {
      name: "Juan Pérez",
      email: "juan@example.com",
      passwordHash: "hashedpassword123",
      role: "buyer"
    }

    expect(() => validateCreateUser(input)).not.toThrow()
  })

  it("should throw with invalid email", () => {
    const input = {
      name: "Juan",
      email: "not-an-email",
      role: "buyer"
    }

    expect(() => validateCreateUser(input)).toThrow()
  })
})
