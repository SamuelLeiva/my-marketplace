import { User } from "@/contracts";
import { UserRepository } from "@/core/ports";

export class GetUserByIdUseCase {
  constructor(private repo: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    return this.repo.getById(id);
  }
}