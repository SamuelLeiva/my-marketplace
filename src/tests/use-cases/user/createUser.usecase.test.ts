import { describe, it, expect, vi } from "vitest";
import { CreateUserInput, User } from "@/contracts";
import { UserRepository } from "@/core/ports";
import { v4 as uuidv4 } from "uuid";
import { CreateUserUseCase } from "@/core/use-cases/user";

describe("CreateUserUseCase", () => {
  it("should create a valid user", async () => {
    const mockRepo: UserRepository = {
      create: vi.fn(
        async (input: CreateUserInput): Promise<User> => ({
          ...input,
          id: uuidv4(),
          createdAt: new Date().toISOString(),
        })
      ),
      getById: vi.fn(),
      list: vi.fn(),
      getByEmail: vi.fn(),
    };

    const useCase = new CreateUserUseCase(mockRepo);

    const input: CreateUserInput = {
      name: "Lpilas",
      email: "dadasdas@hotmail.com",
      password: "password1",
      role: "buyer",
    };

    const result = await useCase.execute(input);

    expect(result).toHaveProperty("id"); //se podría agregar más cosas al mock
    expect(result.name).toBe("Lpilas");
    expect(result.email).toBe("dadasdas@hotmail.com");
    expect(mockRepo.create).toHaveBeenCalledWith(input);
  });
});
