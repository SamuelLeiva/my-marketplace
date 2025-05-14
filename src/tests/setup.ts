import { beforeEach } from "vitest";
import { PrismaClient } from "@prisma/client";
import { CATEGORY_ID } from "./constants/ids";

const prisma = new PrismaClient();

beforeEach(async () => {
  try {
    // Eliminar todo con orden para respetar claves foráneas
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();
    await prisma.category.deleteMany(); // prevenir error

    await prisma.category.create({
      data: {
        id: CATEGORY_ID,
        name: "Default Category",
      },
    });
  } catch (error) {
    console.error("🔥 Error en setup.ts:", error);
    throw error;
  }
});
