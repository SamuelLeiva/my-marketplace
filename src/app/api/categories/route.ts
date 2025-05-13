import { NextRequest, NextResponse } from "next/server";
import { PrismaCategoryRepository } from "@/infrastructure/db/prisma/categoryRepository";
import { CreateCategoryUseCase, ListCategoriesUseCase } from "@/core/use-cases/category";
import { validateCreateCategory } from "@/lib/validators";

export async function GET() {
  try {
    const useCase = new ListCategoriesUseCase(PrismaCategoryRepository);
    const categories = await useCase.execute();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("GET /api/categories error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = validateCreateCategory(body);

    const useCase = new CreateCategoryUseCase(PrismaCategoryRepository);
    const category = await useCase.execute(parsed);

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("POST /api/categories error:", error);
    return NextResponse.json({ error: "Invalid input or server error" }, { status: 400 });
  }
}
