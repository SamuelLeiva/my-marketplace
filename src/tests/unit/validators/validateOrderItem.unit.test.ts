
import { validateCreateOrderItem } from "@/lib/validators"
import { describe, expect, it } from "vitest"
import { v4 as uuidv4 } from "uuid"

describe("validateCreateOrderItem", () => {
  it("should validate correct item", () => {
    const input = {
      productId: uuidv4(),
      orderId: uuidv4(),
      quantity: 1,
      unitPrice: 9.99
    }

    expect(() => validateCreateOrderItem(input)).not.toThrow()
  })

  it("should throw with zero quantity", () => {
    const input = {
      productId: uuidv4(),
      orderId: uuidv4(),
      quantity: 0,
      unitPrice: 9.99
    }

    expect(() => validateCreateOrderItem(input)).toThrow()
  })
})
