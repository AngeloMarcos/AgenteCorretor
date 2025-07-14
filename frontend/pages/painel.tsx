// pages/painel.tsx
import Link from 'next/link';
import Head from 'next/head';

const imoveisFakes = [
  { id: '123', titulo: 'Casa com Piscina', preco: 'R$ 500.000,00', imagem: '/placeholder.jpg' },
  { id: '456', titulo: 'Apartamento no Centro', preco: 'R$ 350.000,00', imagem: '/placeholder.jpg' }
];

export default function Painel() {
  return (
    <>
      <Head>
        <title>Painel do Corretor</title>
      </Head>
      <main className="min-h-screen p-8 bg-gray-100">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Painel do Corretor</h1>
          <Link href="/cadastrar" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            + Novo Imóvel
          </Link>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imoveisFakes.map((imovel) => (
            <div key={imovel.id} className="bg-white p-4 rounded shadow">
              <img src={imovel.imagem} alt={imovel.titulo} className="rounded mb-2" />
              <h3 className="font-bold">{imovel.titulo}</h3>
              <p>{imovel.preco}</p>
              <Link href={`/imovel/${imovel.id}`} className="text-sm text-blue-500">Ver</Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
