// pages/404.tsx
import Layout from '../components/Layout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold mb-4 text-red-600">404 - Página não encontrada</h1>
        <p className="mb-6 text-gray-600">Ops! Parece que essa página não existe.</p>
        <Link href="/" className="text-blue-600 hover:underline">Voltar para o início</Link>
      </div>
    </Layout>
  );
}
