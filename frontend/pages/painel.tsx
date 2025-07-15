// pages/painel.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import CardImovel from '../components/CardImovel';
import withAuth from '../utils/withAuth';
import { useEffect, useState } from 'react';
import { buscarImoveis, removerImovel, Imovel } from '../utils/imovelStorage';
import Link from 'next/link';

function Painel() {
  const [imoveis, setImoveis] = useState<Imovel[]>([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    setImoveis(buscarImoveis());
  }, []);

  const excluirImovel = (id: string) => {
    if (confirm('Deseja realmente excluir este imóvel?')) {
      removerImovel(id);
      setImoveis(buscarImoveis());
    }
  };

  const imoveisFiltrados = imoveis.filter((imovel) =>
    imovel.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    imovel.preco.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Layout>
      <Head>
        <title>Painel do Corretor</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Painel do Corretor</h1>

      <input
        type="text"
        placeholder="Buscar por título ou preço..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full max-w-md mb-6 p-2 border rounded shadow-sm"
      />

      {imoveisFiltrados.length === 0 ? (
        <p className="text-gray-500 text-sm">Nenhum imóvel encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imoveisFiltrados.map((imovel) => (
            <CardImovel
              key={imovel.id}
              id={imovel.id}
              titulo={imovel.titulo}
              preco={imovel.preco}
              imagem={imovel.imagem}
              acoes={
                <>
                  <Link
                    href={`/editar/${imovel.id}`}
                    className="bg-yellow-400 text-xs px-2 py-1 rounded text-black hover:bg-yellow-500"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => excluirImovel(imovel.id)}
                    className="bg-red-500 text-xs text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Excluir
                  </button>
                </>
              }
            />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default withAuth(Painel);
