// pages/painel.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import CardImovel from '../components/CardImovel';
import withAuth from '../utils/withAuth';

const imoveisFakes: {
  id: string;
  titulo: string;
  preco: string;
  imagem: string;
}[] = [
  {
    id: '123',
    titulo: 'Casa com Piscina',
    preco: 'R$ 500.000,00',
    imagem: '/placeholder.jpg',
  },
  {
    id: '456',
    titulo: 'Apartamento no Centro',
    preco: 'R$ 350.000,00',
    imagem: '/placeholder.jpg',
  },
];

function Painel() {
  return (
    <Layout>
      <Head>
        <title>Painel do Corretor</title>
      </Head>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Painel do Corretor</h1>
      </header>

      {imoveisFakes.length === 0 ? (
        <p className="text-gray-500 text-sm">Nenhum imóvel cadastrado.</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imoveisFakes.map((imovel) => (
            <CardImovel
              key={imovel.id}
              id={imovel.id}
              titulo={imovel.titulo}
              preco={imovel.preco}
              imagem={imovel.imagem}
            />
          ))}
        </section>
      )}
    </Layout>
  );
}

export default withAuth(Painel);
