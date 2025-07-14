// pages/imovel/[id].tsx
import { useRouter } from 'next/router';

export default function ImovelPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Imóvel #{id}</h1>
      <img src="/placeholder.jpg" alt="Imagem do imóvel" className="mb-4 rounded" />
      <p><strong>Preço:</strong> R$ 350.000,00</p>
      <p><strong>Descrição:</strong> Apartamento espaçoso com 2 quartos e 1 suíte.</p>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Compartilhar no WhatsApp
      </button>
    </main>
  );
}
