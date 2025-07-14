// pages/login.tsx
import { useState } from 'react';
import Head from 'next/head';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-8 rounded shadow w-full max-w-sm">
          <h1 className="text-xl font-bold mb-4">Login</h1>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-2 mb-4 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-2 mb-4 border rounded"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Entrar
          </button>
        </form>
      </main>
    </>
  );
}
