import { NextRequest, NextResponse } from "next/server";
import { PrismaCategoryRepository } from "@/infrastructure/db/prisma/categoryRepository";
import { GetCategoryByIdUseCase } from "@/core/use-cases/category";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: Params) {
  try {
    const categoryId = params.id;

    const useCase = new GetCategoryByIdUseCase(PrismaCategoryRepository);
    const category = await useCase.execute(categoryId);

    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("GET /api/categories/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
