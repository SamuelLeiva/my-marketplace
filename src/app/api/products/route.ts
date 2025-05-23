import { NextRequest, NextResponse } from "next/server";
import { CreateProductUseCase } from "@/core/use-cases/product/createProduct";
import { PrismaProductRepository } from "@/infrastructure/db/prisma/productRepository";
import { validateCreateProduct } from "@/lib/validators";
import { ListProductsUseCase } from "@/core/use-cases/product/listProducts";
import { ZodError } from "zod";

// POST: Crear un producto
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validar input
    const parsed = validateCreateProduct(body);

    // Ejecutar caso de uso
    const useCase = new CreateProductUseCase(PrismaProductRepository);
    const product = await useCase.execute(parsed);

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid input", issues: error.issues },
        { status: 400 }
      );
    }
    console.error("POST /api/products error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: Listar todos los productos
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  try {
    const useCase = new ListProductsUseCase(PrismaProductRepository);
    const products = await useCase.execute();
    return NextResponse.json(products);
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
