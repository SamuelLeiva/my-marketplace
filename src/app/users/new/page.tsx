"use client";

import { UserForm } from "@/ui/components/UserForm";

export default function NewUserPage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Crear Nuevo Usuario</h1>
      <UserForm />
    </main>
  );
}
