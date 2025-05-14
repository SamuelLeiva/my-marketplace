import { User } from "@/contracts";
import { UserRepository } from "@/core/ports";

export class ListUsersUseCase {
  constructor(private repo: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.repo.list();
  }
}
