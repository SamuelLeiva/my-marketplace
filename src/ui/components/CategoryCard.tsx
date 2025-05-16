type Props = {
  id: string;
  name: string;
};

export function CategoryCard({ id, name }: Props) {
  return (
    <div className="rounded-xl shadow p-4 bg-white">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">ID: {id}</p>
    </div>
  );
}
