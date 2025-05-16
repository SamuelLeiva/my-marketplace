import { Category, User } from "@/contracts";


export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch("http://localhost:3000/api/categories");
  return res.json();
}

export async function fetchCategoryById(id: string) {
  const res = await fetch(`http://localhost:3000/api/categories/${id}`);
  return res.json();
}

export async function createCategory(name: string) {
  const res = await fetch("http://localhost:3000/api/categories", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
}
