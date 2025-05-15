import { NextResponse, NextRequest } from "next/server";
import { PrismaProductRepository } from "@/infrastructure/db/prisma/productRepository";
import { PrismaUserRepository } from "@/infrastructure/db/prisma/userRepository";

export async function GET(
  req: NextRequest,
  { params }: { params: { sellerId: string } }
) {
  try {
    const { sellerId } = params;

    const seller = await PrismaUserRepository.getById(sellerId);
    if (!seller) {
      return NextResponse.json({ error: "Seller not found" }, { status: 404 });
    }

    const products = await PrismaProductRepository.listBySeller(sellerId);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("GET /api/products/by-seller/:sellerId error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
