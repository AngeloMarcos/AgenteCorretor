// pages/cadastrar.tsx
import { useState } from 'react';
import Head from 'next/head';

export default function CadastrarImovel() {
  const [titulo, setTitulo] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  return (
    <>
      <Head>
        <title>Cadastrar Imóvel</title>
      </Head>
      <main className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Cadastrar Novo Imóvel</h1>
        <form className="bg-white p-6 rounded shadow max-w-xl">
          <input
            type="text"
            placeholder="Título do imóvel"
            className="w-full p-2 mb-4 border rounded"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Preço"
            className="w-full p-2 mb-4 border rounded"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            className="w-full p-2 mb-4 border rounded"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL da Imagem"
            className="w-full p-2 mb-4 border rounded"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Salvar Imóvel
          </button>
        </form>
      </main>
    </>
  );
}
