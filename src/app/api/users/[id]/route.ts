import { NextRequest, NextResponse } from "next/server";
import { GetUserByIdUseCase } from "@/core/use-cases/user/getUserById";
import { PrismaUserRepository } from "@/infrastructure/db/prisma/userRepository";

interface Params {
  params: {
    id: string;
  };
}

// GET: Obtener user por ID
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const useCase = new GetUserByIdUseCase(PrismaUserRepository);
    const users = await useCase.execute(params.id);
    if (users) {
      return NextResponse.json(users);
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("GET /api/users/[id] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}