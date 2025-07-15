// utils/imovelStorage.ts

export interface Imovel {
  id: string;
  titulo: string;
  preco: string;
  descricao: string;
  imagem: string;
}

const STORAGE_KEY = 'imoveis';

export function salvarImovel(imovel: Imovel) {
  const lista = buscarImoveis();
  lista.push(imovel);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

export function buscarImoveis(): Imovel[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
