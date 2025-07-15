// pages/editar/[id].tsx
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import { buscarImoveis, atualizarImovel, Imovel } from '../../utils/imovelStorage';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

export default function EditarImovel() {
  const { query, push } = useRouter();
  const { id } = query;

  const [carregado, setCarregado] = useState(false);
  const [imagemPreview, setImagemPreview] = useState('');
  const { register, handleSubmit, setValue } = useForm<Imovel>();

  useEffect(() => {
    if (typeof id === 'string') {
      const lista = buscarImoveis();
      const imovel = lista.find((i) => i.id === id);
      if (imovel) {
        setValue('id', imovel.id);
        setValue('titulo', imovel.titulo);
        setValue('preco', imovel.preco);
        setValue('descricao', imovel.descricao);
        setValue('imagem', imovel.imagem);
        setImagemPreview(imovel.imagem);
      }
      setCarregado(true);
    }
  }, [id, setValue]);

  function onSubmit(data: Imovel) {
    atualizarImovel(data);
    alert('Imóvel atualizado com sucesso!');
    push('/painel');
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Editar Imóvel</h1>
      {!carregado ? (
        <p>Carregando...</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow max-w-xl space-y-4">
          <input {...register('titulo')} placeholder="Título" className="w-full p-2 border rounded" />
          <input {...register('preco')} placeholder="Preço" className="w-full p-2 border rounded" />
          <textarea {...register('descricao')} placeholder="Descrição" className="w-full p-2 border rounded" />

          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border rounded"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const reader = new FileReader();
              reader.onloadend = () => {
                const base64 = reader.result as string;
                setValue('imagem', base64);
                setImagemPreview(base64);
              };
              reader.readAsDataURL(file);
            }}
          />

          <input type="hidden" {...register('imagem')} />
          <input type="hidden" {...register('id')} />

          {imagemPreview && (
            <img src={imagemPreview} alt="Preview" className="w-full h-48 object-cover mt-2 rounded" />
          )}

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Salvar Alterações
          </button>
        </form>
      )}
    </Layout>
  );
}
