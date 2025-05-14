import { CreateUserInput, User } from "@/contracts";
import { UserRepository } from "@/core/ports";

export class CreateUserUseCase {
  constructor(private repo: UserRepository) {}

  async execute(input: CreateUserInput): Promise<User> {
    // validación o lógica extra podría ir aquí
    return this.repo.create(input);
  }
}
