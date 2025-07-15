// components/CardImovel.tsx
import Link from 'next/link';

interface CardImovelProps {
  id: string;
  imagem: string;
  titulo: string;
  preco: string;
}

export default function CardImovel({ id, imagem, titulo, preco }: CardImovelProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={imagem || "/placeholder.jpg"} alt={titulo} className="rounded mb-2 w-full h-48 object-cover" />
      <h3 className="font-bold">{titulo}</h3>
      <p>{preco}</p>
      <Link href={`/imovel/${id}`} className="text-sm text-blue-500">
        Ver mais
      </Link>
    </div>
  );
}
