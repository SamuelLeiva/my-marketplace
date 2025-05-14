import { NextRequest, NextResponse } from "next/server";
import { CreateUserUseCase, ListUsersUseCase } from "@/core/use-cases/user";
import { PrismaUserRepository } from "@/infrastructure/db/prisma/userRepository";
import { validateCreateUser } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validar input
    const parsed = validateCreateUser(body);

    // Ejecutar caso de uso
    const useCase = new CreateUserUseCase(PrismaUserRepository);
    const user = await useCase.execute(parsed);

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("POST /api/users error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: Listar todos los productos
export async function GET() {
  try {
    const useCase = new ListUsersUseCase(PrismaUserRepository);
    const users = await useCase.execute();
    return NextResponse.json(users);
  } catch (error) {
    console.error("GET /api/users error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
