import { NextRequest, NextResponse } from "next/server";
import { PrismaUserRepository } from "@/infrastructure/db/prisma/userRepository";
import { GetUserByEmailUseCase } from "@/core/use-cases/user";

interface Params {
  params: {
    email: string;
  };
}

// GET: Obtener user por ID
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const useCase = new GetUserByEmailUseCase(PrismaUserRepository);
    const user = await useCase.execute(params.email);
    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("GET /api/users/[email] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}