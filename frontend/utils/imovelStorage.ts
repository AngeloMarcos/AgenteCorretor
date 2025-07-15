// utils/imovelStorage.ts

export interface Imovel {
  id: string;
  titulo: string;
  preco: string;
  descricao: string;
  imagem: string; // pode ser uma URL ou imagem em base64
}

const STORAGE_KEY = 'imoveis';

/**
 * Salva um novo imóvel no localStorage
 */
export function salvarImovel(imovel: Imovel) {
  const lista = buscarImoveis();
  lista.push(imovel);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

/**
 * Retorna todos os imóveis salvos no localStorage
 */
export function buscarImoveis(): Imovel[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
/**
 * Remove um imóvel pelo ID
 */
export function removerImovel(id: string) {
  const lista = buscarImoveis();
  const novaLista = lista.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
}
/**
 * Atualiza um imóvel existente pelo ID
 */
export function atualizarImovel(imovelAtualizado: Imovel) {
  const lista = buscarImoveis();
  const novaLista = lista.map((item) =>
    item.id === imovelAtualizado.id ? imovelAtualizado : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
}
