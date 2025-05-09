import { Product } from "@/contracts";
import { ProductRepository } from "@/core/ports";

export class ListProductsUseCase {
  constructor(private repo: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.repo.list();
  }
}
