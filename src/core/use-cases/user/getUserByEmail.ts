import { User } from "@/contracts";
import { UserRepository } from "@/core/ports";

export class GetUserByEmailUseCase {
  constructor(private repo: UserRepository) {}

  async execute(email: string): Promise<User | null> {
    return this.repo.getByEmail(email);
  }
}