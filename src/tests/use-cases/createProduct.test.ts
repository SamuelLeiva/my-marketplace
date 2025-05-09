// src/tests/use-cases/product/createProduct.test.ts
import { describe, it, expect, vi } from "vitest";
import { CreateProductUseCase } from "@/core/use-cases/product";
import { CreateProductInput, Product } from "@/contracts";
import { ProductRepository } from "@/core/ports";

describe("CreateProductUseCase", () => {
  it("should create a product", async () => {
    const mockRepo: ProductRepository = {
      create: vi.fn(
        async (input: CreateProductInput): Promise<Product> => ({
          ...input,
          id: "uuid-123",
          createdAt: new Date().toISOString(),
        })
      ),
      getById: vi.fn(), 
      list: vi.fn(),
      listBySeller: vi.fn(),
      delete: vi.fn(),
      update: vi.fn(),
    };

    const useCase = new CreateProductUseCase(mockRepo);

    const input: CreateProductInput = {
      name: "Libro",
      description: "Una historia genial",
      price: 20,
      sellerId: "seller-uuid",
      categoryId: "cat-uuid",
      imageUrl: "https://example.com/img.jpg",
    };

    const result = await useCase.execute(input);

    expect(result).toHaveProperty("id");
    expect(result.name).toBe("Libro");
    expect(mockRepo.create).toHaveBeenCalledWith(input);
  });
});
