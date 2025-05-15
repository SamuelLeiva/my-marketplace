import { NextRequest, NextResponse } from "next/server";
import { GetProductByIdUseCase } from "@/core/use-cases/product/getProductById";
import { UpdateProductUseCase } from "@/core/use-cases/product/updateProduct";
import { DeleteProductUseCase } from "@/core/use-cases/product/deleteProduct";
import { PrismaProductRepository } from "@/infrastructure/db/prisma/productRepository";
import { validateCreateProduct } from "@/lib/validators";

interface Params {
  params: {
    id: string;
  };
}

// GET: Obtener producto por ID
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const useCase = new GetProductByIdUseCase(PrismaProductRepository);
    const product = await useCase.execute(params.id);
    if (product) {
      return NextResponse.json(product);
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("GET /api/products/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT: Actualizar producto por ID
export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const body = await req.json();
    
    // Validación de input (opcional)
    const parsed = validateCreateProduct(body);

    const useCase = new UpdateProductUseCase(PrismaProductRepository);
    const updatedProduct = await useCase.execute(params.id, parsed);
    if (updatedProduct) {
      return NextResponse.json(updatedProduct);
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("PUT /api/products/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE: Eliminar producto por ID
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const product = await PrismaProductRepository.getById(params.id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const useCase = new DeleteProductUseCase(PrismaProductRepository);
    await useCase.execute(params.id);
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/products/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
