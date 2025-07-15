// pages/login.tsx
import { useState } from 'react';
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login(email, senha);
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-sm mx-auto mt-10">
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
    </Layout>
  );
}
