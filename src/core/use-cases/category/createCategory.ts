import { Category, CreateCategoryInput } from "@/contracts";
import { CategoryRepository } from "@/core/ports";

export class CreateCategoryUseCase {
  constructor(private readonly repo: CategoryRepository) {}

  async execute(input: CreateCategoryInput): Promise<Category> {
    return this.repo.create(input);
  }
}