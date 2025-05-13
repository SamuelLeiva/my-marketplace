import { Category } from "@/contracts";
import { CategoryRepository } from "@/core/ports";

export class ListCategoriesUseCase {
  constructor(private readonly repo: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    return this.repo.list();
  }
}
