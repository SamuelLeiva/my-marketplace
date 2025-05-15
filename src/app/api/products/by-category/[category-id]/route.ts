import { NextResponse, NextRequest } from "next/server";
import { PrismaProductRepository } from "@/infrastructure/db/prisma/productRepository";
import { PrismaCategoryRepository } from "@/infrastructure/db/prisma/categoryRepository";

export async function GET(
  req: NextRequest,
  { params }: { params: { categoryId: string } }
) {
  try {
    const { categoryId } = params;

    const category = await PrismaCategoryRepository.getById(categoryId);
    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    const products = await PrismaProductRepository.listBySeller(categoryId);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("GET /api/products/by-seller/:sellerId error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
