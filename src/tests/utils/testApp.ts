import { NextRequest } from "next/server";

// Función para construir un Request mock
export function createMockRequest(method: string, url: string, body?: unknown) {
  return new NextRequest(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
}