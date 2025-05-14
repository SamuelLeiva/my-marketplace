import { beforeEach } from "vitest";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

beforeEach(async () => {
  // Eliminar todo con orden para respetar claves foráneas
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany(); // prevenir error
});
