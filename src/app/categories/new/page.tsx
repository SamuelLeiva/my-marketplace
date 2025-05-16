import { CategoryForm } from "@/ui/components/CategoryForm";


export default function NewCategoryPage() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Category</h1>
      <CategoryForm />
    </main>
  );
}