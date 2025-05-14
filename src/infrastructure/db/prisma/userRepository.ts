import { UserRepository } from "@/core/ports";
import { CreateUserInput, User } from "@/contracts";
import { PrismaClient } from "@prisma/client";
import { normalizeUser } from "./mappers/normalizeUser";

const prisma = new PrismaClient();

export const PrismaUserRepository: UserRepository = {
  async create(input: CreateUserInput): Promise<User> {
    const user = await prisma.user.create({
      data: input,
    });
    return normalizeUser(user);
  },

  async getByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user ? normalizeUser(user) : null;
  },

  async getById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user ? normalizeUser(user) : null;
  },

  async list(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users.map(normalizeUser);
  },
};
