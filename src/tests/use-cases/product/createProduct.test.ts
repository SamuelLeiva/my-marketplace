import { describe, it, expect, vi } from "vitest";
import { CreateProductUseCase } from "@/core/use-cases/product";
import { CreateProductInput, Product } from "@/contracts";
import { ProductRepository } from "@/core/ports";
import { v4 as uuidv4 } from "uuid";

describe("CreateProductUseCase", () => {
  it("should create a valid product", async () => {
    const mockRepo: ProductRepository = {
      create: vi.fn(
        async (input: CreateProductInput): Promise<Product> => ({
          ...input,
          id: uuidv4(),
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
      sellerId: uuidv4(),
      categoryId: uuidv4(),
      imageUrl: "https://example.com/img.jpg",
    };

    const result = await useCase.execute(input);

    expect(result).toHaveProperty("id"); //se podría agregar más cosas al mock
    expect(result.name).toBe("Libro");
    expect(mockRepo.create).toHaveBeenCalledWith(input);
  });
});
