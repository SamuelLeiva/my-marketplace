// src/components/UserCard.tsx
type Props = {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
};

export function UserCard({ user }: Props) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="font-semibold">{user.name}</h3>
      <p>{user.email}</p>
      <p className="text-sm text-gray-600">Rol: {user.role}</p>
    </div>
  );
}
