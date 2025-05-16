// src/components/UserForm.tsx
"use client";

import { useState } from "react";

type Props = {
  onSuccess?: () => void;
};

export function UserForm({ onSuccess }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setMessage("Usuario creado correctamente");
      setForm({ name: "", email: "", password: "", role: "buyer" });
      onSuccess?.();
    } else {
      const error = await res.json();
      setMessage(error.error || "Error al crear usuario");
    }
  };

  return (
    <div>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Nombre"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Contraseña"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <select
        className="border p-2 mb-4 w-full"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Crear
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
