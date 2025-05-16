"use client";

import { useState } from "react";
import { createCategory } from "@/lib/api";
import { useRouter } from "next/navigation";

export function CategoryForm() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCategory(name);
    router.push("/categories");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Category name"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Category
      </button>
    </form>
  );
}
