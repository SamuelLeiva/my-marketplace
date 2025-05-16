'use client'

import { fetchUserByEmail } from "@/lib/api";
import { UserCard } from "@/ui/components/UserCard";
import { useState } from "react";

export default function UserByEmailPage() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const user = await fetchUserByEmail(email);
    if (!user || user.error) {
      alert("Usuario no encontrado");
    }
    setUser(user);
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Buscar Usuario por Email</h1>
      <input
        className="border p-2 mb-2 rounded w-full"
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchUser}>
        Buscar
      </button>
      {user && (
        <div className="mt-4">
          <UserCard user={user} />
        </div>
      )}
    </main>
  );
}
