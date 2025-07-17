import { useState } from 'react';
import { useRouter } from 'next/router';
import { fetchWithAuth } from '../utils/api';

export default function Cadastrar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirma, setConfirma] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');

    if (senha !== confirma) {
      setErro('As senhas não coincidem.');
      return;
    }

    try {
      await fetchWithAuth('/auth/register', 'POST', {
        email,
        password: senha,
      });
      setSucesso('Cadastro realizado com sucesso!');
      setTimeout(() => router.push('/login'), 2000);
    } catch (error: any) {
      setErro(error.message || 'Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Cadastrar Corretor</h1>
      {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}
      {sucesso && <p className="text-green-600 text-sm mb-2">{sucesso}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirma}
          onChange={(e) => setConfirma(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
