import { Category } from "@/contracts";
import { CategoryRepository } from "@/core/ports";

export class GetCategoryByIdUseCase {
  constructor(private readonly repo: CategoryRepository) {}

  async execute(id: string): Promise<Category | null> {
    return this.repo.getById(id);
  }
}
