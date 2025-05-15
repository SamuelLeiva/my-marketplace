
import { validateCreateProduct } from "@/lib/validators"
import { describe, expect, it } from "vitest"
import { v4 as uuidv4 } from "uuid"

describe("validateCreateProduct", () => {
  it("should pass with valid input", () => {
    const input = {
      sellerId: uuidv4(),  // requerido
      name: "Libro de prueba",
      description: "Una excelente historia.",
      price: 19.99,
      imageUrl: "https://example.com/img1.jpg", // cambia de images[] a imageUrl
      categoryId: uuidv4()
    }

    const result = validateCreateProduct(input)
    expect(result.name).toBe("Libro de prueba")
  })

  it("should throw error with missing fields", () => {
    const input = {
      name: "Faltan cosas"
    }

    expect(() => validateCreateProduct(input)).toThrow()
  })
})
