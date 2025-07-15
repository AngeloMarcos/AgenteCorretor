// components/CardImovel.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardImovelProps {
  id: string;
  imagem: string;
  titulo: string;
  preco: string;
  acoes?: ReactNode; // novo: espaço para botões como editar/excluir
}

export default function CardImovel({
  id,
  imagem,
  titulo,
  preco,
  acoes,
}: CardImovelProps) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all duration-200 relative group">
      <img
        src={imagem || "/placeholder.jpg"}
        alt={titulo}
        className="rounded mb-3 w-full h-48 object-cover"
      />

      <div className="mb-2">
        <h3 className="font-semibold text-lg text-gray-800">{titulo}</h3>
        <p className="text-gray-600">{preco}</p>
      </div>

      <Link
        href={`/imovel/${id}`}
        className="text-sm text-blue-600 hover:underline font-medium"
      >
        Ver mais detalhes →
      </Link>

      {/* Botões de ação (painel) */}
      {acoes && (
        <div className="absolute top-2 right-2 space-x-2 opacity-0 group-hover:opacity-100 transition">
          {acoes}
        </div>
      )}
    </div>
  );
}
