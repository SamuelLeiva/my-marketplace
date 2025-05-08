
import { validateCreateReview } from "@/lib/validators"
import { describe, expect, it } from "vitest"
import { v4 as uuidv4 } from "uuid"

describe("validateCreateReview", () => {
  it("should validate valid review", () => {
    const input = {
      productId: uuidv4(),
      userId: uuidv4(),
      rating: 5,
      comment: "Excelente producto"
    }

    expect(() => validateCreateReview(input)).not.toThrow()
  })

  it("should throw with rating > 5", () => {
    const input = {
      productId: uuidv4(),
      userId: uuidv4(),
      rating: 6,
      comment: "Demasiado bueno para ser verdad"
    }

    expect(() => validateCreateReview(input)).toThrow()
  })
})
