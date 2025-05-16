
import { fetchUserById } from "@/lib/api";
import { UserCard } from "@/ui/components/UserCard";
import { notFound } from "next/navigation";

export default async function UserByIdPage({ params }: { params: { id: string } }) {
  const user = await fetchUserById(params.id);
  
    if (!user || user.error) return notFound();
  

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Usuario por ID</h1>
      {user ? <UserCard user={user} /> : <p>No encontrado o cargando...</p>}
    </main>
  );
}
