
import { validateCreateOrder } from "@/lib/validators"
import { describe, expect, it } from "vitest"
import { v4 as uuidv4 } from "uuid"

describe("validateCreateOrder", () => {
  it("should validate order with items", () => {
    const input = {
      buyerId: uuidv4(),
      total: 245.26,
      status: "pending",
    }

    expect(() => validateCreateOrder(input)).not.toThrow()
  })

  it("should throw with empty items", () => {
    const input = {
      userId: uuidv4(),
      items: []
    }

    expect(() => validateCreateOrder(input)).toThrow()
  })
})
