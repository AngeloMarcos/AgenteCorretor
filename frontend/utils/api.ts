const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchWithAuth(
  url: string,
  method: string = 'GET',
  data?: any,
  token?: string
) {
  const res = await fetch(`${API_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) throw new Error(`Erro na requisição: ${res.status}`);

  return res.json();
}
