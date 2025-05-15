import { beforeAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import { CATEGORY_ID, CATEGORY_NAME, PRODUCT_ID, USER_EMAIL, USER_ID } from "../constants";

const prisma = new PrismaClient();

beforeAll(async () => {
  // 1. Limpiar datos en orden correcto
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();

  // 2. Crear categoría por defecto
  const category = await prisma.category.create({
    data: {
      id: CATEGORY_ID,
      name: CATEGORY_NAME,
    },
  });

  // 3. Crear usuario seller por defecto
  const user = await prisma.user.create({
    data: {
      id: USER_ID,
      name: "Test Seller",
      email: USER_EMAIL,
      role: "seller",
      password: "hashed-password",
    },
  });

  // 4. Crear producto vinculado a seller y categoría
  await prisma.product.create({
    data: {
      id: PRODUCT_ID,
      name: "Test Product",
      price: 1000,
      categoryId: category.id,
      sellerId: user.id,
      imageUrl: "https://example.com/image.png",
      description: "This is a test product",
    },
  });
});