import { describe, it, expect, vi } from "vitest"
import { User } from "@/contracts"
import { UserRepository } from "@/core/ports"
import { v4 as uuidv4 } from "uuid"
import { ListUsersUseCase } from "@/core/use-cases/user"

describe("ListUsersUseCase", () => {
  const mockUsers: User[] = [
    {
      id: uuidv4(),
      name: "Usuario A",
      email: "ej1@gmail.com",
      password: "pass1",
      role: "buyer",
      createdAt: new Date().toISOString()
    },
    {
      id: uuidv4(),
      name: "Usuario B",
      email: "ej2@gmail.com",
      password: "pass2",
      role: "seller",
      createdAt: new Date().toISOString()
    },
  ]

  const mockRepo: UserRepository = {
    list: vi.fn(async () => mockUsers),
    create: vi.fn(),
    getById: vi.fn(),
    getByEmail: vi.fn(),
  }

  const useCase = new ListUsersUseCase(mockRepo)

  it("should return all products", async () => {
    const result = await useCase.execute()
    expect(result).toEqual(mockUsers)
    expect(Array.isArray(result)).toBe(true)
    expect(mockRepo.list).toHaveBeenCalled()
  })
})
