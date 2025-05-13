import { NextResponse, NextRequest } from "next/server";
import { PrismaProductRepository } from "@/infrastructure/db/prisma/productRepository";

export async function GET(
  req: NextRequest,
  { params }: { params: { sellerId: string } }
) {
  try {
    const { sellerId } = params;
    const products = await PrismaProductRepository.listBySeller(sellerId);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("GET /api/product/by-seller/:sellerId error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
