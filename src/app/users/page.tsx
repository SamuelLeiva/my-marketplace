
import { fetchUsers } from "@/lib/api";
import { UserCard } from "@/ui/components/UserCard";

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Lista de Usuarios</h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
