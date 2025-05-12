import { ProductRepository } from "@/core/ports";

export class DeleteProductUseCase {
  constructor(private repo: ProductRepository) {}

  async execute(id: string): Promise<void> {
    return this.repo.delete(id);
  }
}
