// src/tests/use-cases/product/getProductById.test.ts
import { describe, it, expect, vi } from "vitest";
import { v4 as uuidv4 } from "uuid";
import { Product } from "@/contracts";
import { ProductRepository } from "@/core/ports";
import { GetProductByIdUseCase } from "@/core/use-cases/product/getProductById";

describe("GetProductByIdUseCase", () => {
  const validId = uuidv4();
  const mockProduct: Product = {
    id: validId,
    name: "Producto test",
    description: "Descripción",
    price: 49.99,
    imageUrl: "https://example.com/image.jpg",
    sellerId: uuidv4(),
    categoryId: uuidv4(),
    createdAt: new Date().toISOString(),
  };

  const mockRepo: ProductRepository = {
    create: vi.fn(),
    getById: vi.fn(async (id: string) =>
      id === mockProduct.id ? mockProduct : null
    ),
    list: vi.fn(),
    listBySeller: vi.fn(),
    delete: vi.fn(),
    update: vi.fn(),
  };

  const useCase = new GetProductByIdUseCase(mockRepo);

  it("should return product when ID matches", async () => {
    const result = await useCase.execute(validId);
    expect(result).toEqual(mockProduct);
  });

  it("should return null when ID does not match", async () => {
    const result = await useCase.execute(uuidv4());
    expect(result).toBeNull();
  });
});
