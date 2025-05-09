import { describe, it, expect, vi } from "vitest"
import { ListProductsUseCase } from "@/core/use-cases/product/listProducts"
import { Product } from "@/contracts"
import { ProductRepository } from "@/core/ports"
import { v4 as uuidv4 } from "uuid"

describe("ListProductsUseCase", () => {
  const mockProducts: Product[] = [
    {
      id: uuidv4(),
      name: "Producto A",
      description: "Descripción A",
      price: 25,
      sellerId: uuidv4(),
      categoryId: uuidv4(),
      imageUrl: "https://example.com/img-a.jpg",
      createdAt: new Date().toISOString()
    },
    {
      id: uuidv4(),
      name: "Producto B",
      description: "Descripción B",
      price: 35,
      sellerId: uuidv4(),
      categoryId: uuidv4(),
      imageUrl: "https://example.com/img-b.jpg",
      createdAt: new Date().toISOString()
    }
  ]

  const mockRepo: ProductRepository = {
    list: vi.fn(async () => mockProducts),
    create: vi.fn(),
    getById: vi.fn(),
    listBySeller: vi.fn(),
    delete: vi.fn(),
    update: vi.fn(),
  }

  const useCase = new ListProductsUseCase(mockRepo)

  it("should return all products", async () => {
    const result = await useCase.execute()
    expect(result).toEqual(mockProducts)
    expect(Array.isArray(result)).toBe(true)
    expect(mockRepo.list).toHaveBeenCalled()
  })
})
