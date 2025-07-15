import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const isActive = (href: string) =>
    router.pathname === href ? 'text-blue-600 font-semibold' : 'text-gray-700';

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Agente Corretor</h1>

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Olá, Corretor</span>
            <button
              onClick={logout}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Sair
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link href="/" className={`text-sm hover:text-blue-600 ${isActive('/')}`}>Início</Link>
            <Link href="/painel" className={`text-sm hover:text-blue-600 ${isActive('/painel')}`}>Painel</Link>
            <Link href="/cadastrar" className={`text-sm hover:text-blue-600 ${isActive('/cadastrar')}`}>Cadastrar</Link>
            <Link href="/login" className={`text-sm hover:text-blue-600 ${isActive('/login')}`}>Login</Link>
          </div>
        )}
      </nav>

      <main className="p-6 flex-1">{children}</main>

      <footer className="mt-10 text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Agente Corretor. Todos os direitos reservados.
      </footer>
    </div>
  );
}
