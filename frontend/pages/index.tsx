// pages/index.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import CardImovel from '../components/CardImovel';
import Link from 'next/link';

const imoveis = [
  {
    id: '123',
    titulo: 'Apartamento no Centro',
    preco: 'R$ 350.000,00',
    imagem: '/placeholder.jpg',
  },
  {
    id: '456',
    titulo: 'Casa com Piscina',
    preco: 'R$ 500.000,00',
    imagem: '/placeholder.jpg',
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Portal Imobiliário</title>
      </Head>

      {/* HERO COM IMAGEM */}
      <section className="bg-white rounded-lg shadow mb-10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">
            Encontre o imóvel ideal com poucos cliques
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Os melhores imóveis estão aqui. Simples, rápido e direto no seu WhatsApp.
          </p>
          <Link
            href="/painel"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Ver Imóveis
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="/banner.jpg"
            alt="Imagem de destaque"
            className="w-full h-auto rounded"
          />
        </div>
      </section>

      {/* LISTAGEM */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Imóveis em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imoveis.map((imovel) => (
            <CardImovel
              key={imovel.id}
              id={imovel.id}
              titulo={imovel.titulo}
              preco={imovel.preco}
              imagem={imovel.imagem}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
