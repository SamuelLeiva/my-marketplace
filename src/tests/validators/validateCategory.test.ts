
import { validateCreateCategory } from "@/lib/validators"
import { describe, expect, it } from "vitest"

describe("validateCreateCategory", () => {
  it("should validate correct category", () => {
    const input = {
      name: "Arte Digital",
      description: "Imágenes descargables"
    }

    expect(() => validateCreateCategory(input)).not.toThrow()
  })

  it("should throw with missing name", () => {
    const input = {
      description: "Falta nombre"
    }

    expect(() => validateCreateCategory(input)).toThrow()
  })
})