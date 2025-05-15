import { describe, it, expect, vi } from "vitest";
import { v4 as uuidv4 } from "uuid";
import { User } from "@/contracts";
import { UserRepository } from "@/core/ports";
import { GetUserByIdUseCase } from "@/core/use-cases/user";

describe("GetUserByIdUseCase", () => {
  const validId = uuidv4();
  const mockUser: User = {
    id: validId,
    name: "usuario test",
    email: "emailvalido@gmail.com",
    password: "passwordSecreta",
    role: "buyer",
    createdAt: new Date().toISOString(),
  };

  const mockRepo: UserRepository = {
    create: vi.fn(),
    getById: vi.fn(async (id: string) =>
      id === mockUser.id ? mockUser : null
    ),
    list: vi.fn(),
    getByEmail: vi.fn(),
  };

  const useCase = new GetUserByIdUseCase(mockRepo);

  it("should return product when ID matches", async () => {
    const result = await useCase.execute(validId);
    expect(result).toEqual(mockUser);
  });

  it("should return null when ID does not match", async () => {
    const result = await useCase.execute(uuidv4());
    expect(result).toBeNull();
  });
});
