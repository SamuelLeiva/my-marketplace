import { describe, it, expect, vi } from "vitest";
import { ListProductsBySellerUseCase } from "@/core/use-cases/product/listProductsBySeller";
import { Product } from "@/contracts";
import { v4 as uuidv4 } from "uuid";
import { ProductRepository } from "@/core/ports";

describe("ListProductsBySellerUseCase", () => {
  it("should return products for a seller", async () => {
    const sellerId = uuidv4();
    const mockProducts: Product[] = [
      {
        id: uuidv4(),
        name: "Producto A",
        price: 10,
        sellerId,
        categoryId: uuidv4(),
        createdAt: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        name: "Producto B",
        price: 20,
        sellerId,
        categoryId: uuidv4(),
        createdAt: new Date().toISOString(),
      },
    ];

    const mockRepo: ProductRepository = {
      listBySeller: vi.fn(async (id: string) =>
        id === sellerId ? mockProducts : []
      ),
      create: vi.fn(),
      list: vi.fn(),
      getById: vi.fn(),
      delete: vi.fn(),
      update: vi.fn(),
    };

    const useCase = new ListProductsBySellerUseCase(mockRepo);
    const result = await useCase.execute(sellerId);
    expect(result).toHaveLength(2);
  });
});
