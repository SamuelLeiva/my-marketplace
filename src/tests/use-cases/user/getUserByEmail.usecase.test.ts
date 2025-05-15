import { describe, it, expect, vi } from "vitest";
import { v4 as uuidv4 } from "uuid";
import { User } from "@/contracts";
import { UserRepository } from "@/core/ports";
import { GetUserByEmailUseCase } from "@/core/use-cases/user";

describe("GetUserByEmailUseCase", () => {
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
    getByEmail: vi.fn(async (email: string) =>
      email === mockUser.email ? mockUser : null
    ),
    list: vi.fn(),
    getById: vi.fn(),
  };

  const useCase = new GetUserByEmailUseCase(mockRepo);

  it("should return user when email matches", async () => {
    const result = await useCase.execute(mockUser.email);
    expect(result).toEqual(mockUser);
  });

  it("should return null when email does not match", async () => {
    const result = await useCase.execute("otroemail@gmail.com");
    expect(result).toBeNull();
  });
});