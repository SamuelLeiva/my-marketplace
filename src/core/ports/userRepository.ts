import { CreateUserInput, User } from "@/contracts"

export interface UserRepository {
  create(input: CreateUserInput): Promise<User>
  getByEmail(email: string): Promise<User | null>
  getById(id: string): Promise<User | null>
  list(): Promise<User[]>
}
