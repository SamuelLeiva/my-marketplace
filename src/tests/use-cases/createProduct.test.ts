// src/tests/use-cases/createProduct.test.ts
import { describe, it, expect, vi } from "vitest"
import { v4 as uuidv4 } from "uuid"
import { CreateProductInput, Product } from "@/contracts"
import { ProductRepository } from "@/core/ports/productRepository"
import { CreateProductUseCase } from "@/core/use-cases"

const mockProductRepository: ProductRepository = {
    create: vi.fn(async (product) => ({
        ...product,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
    })),
    findById: function (id: string): Promise<Product | null> {
        throw new Error("Function not implemented.")
    },
    findAll: function (): Promise<Product[]> {
        throw new Error("Function not implemented.")
    }
}

describe("createProduct use case", () => {
  it("should create a product with valid input", async () => {
    const input: CreateProductInput = {
      sellerId: uuidv4(),
      name: "Producto de prueba",
      description: "Una descripción",
      price: 25.5,
      categoryId: uuidv4(),
      imageUrl: "https://example.com/image.jpg"
    }

    const useCase = new CreateProductUseCase(mockProductRepository)
    const product = await useCase.execute(input)

    expect(product).toHaveProperty("id")
    expect(product.name).toBe(input.name)
    expect(product.sellerId).toBe(input.sellerId)
    expect(product.createdAt).toBeDefined()
  })
})
