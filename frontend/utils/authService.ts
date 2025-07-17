// frontend/utils/authService.ts
const API_URL = 'http://localhost:3001'; // ou a URL da sua API

export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Email ou senha inválidos');
  }

  const data = await response.json();
  return data; // retorna { access_token: string }
}
