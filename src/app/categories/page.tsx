
import { Category } from "@/contracts";
import { fetchCategories } from "@/lib/api";
import { CategoryCard } from "@/ui/components/CategoryCard";

export default async function CategoriesPage() {
  
  const categories: Category[] = await fetchCategories();

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} {...cat} />
        ))}
      </div>
    </main>
  );
}
