// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal Imobiliário</title>
      </Head>
      <main className="min-h-screen p-8 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Portal Imobiliário</h1>
          <Link href="/login" className="text-blue-600">Entrar</Link>
        </header>
        <section>
          <h2 className="text-xl font-semibold mb-4">Imóveis em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <img src="/placeholder.jpg" alt="Imóvel" className="rounded mb-2" />
              <h3 className="font-bold">Apartamento no Centro</h3>
              <p>R$ 350.000,00</p>
              <Link href="/imovel/123" className="text-sm text-blue-500">Ver mais</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
