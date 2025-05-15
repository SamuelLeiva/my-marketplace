import { PrismaClient } from "@prisma/client";
import { beforeAll } from "vitest";

const prisma = new PrismaClient();

beforeAll(async () => {
  // 1. Limpiar datos en orden correcto
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();
})