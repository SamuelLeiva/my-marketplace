import { Product } from "@/contracts";
import { ProductRepository } from "@/core/ports";

export class ListProductsBySellerUseCase {
  constructor(private repo: ProductRepository) {}

  async execute(sellerId: string): Promise<Product[]> {
    return this.repo.listBySeller(sellerId);
  }
}