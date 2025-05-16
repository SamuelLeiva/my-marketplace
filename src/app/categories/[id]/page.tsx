import { fetchCategoryById } from "@/lib/api";
import { CategoryCard } from "@/ui/components/CategoryCard";
import { notFound } from "next/navigation";

export default async function CategoryByIdPage({ params }: { params: { id: string } }) {
  const category = await fetchCategoryById(params.id);

  if (!category || category.error) return notFound();

  return (
    <main className="p-6">
      <CategoryCard {...category} />
    </main>
  );
}