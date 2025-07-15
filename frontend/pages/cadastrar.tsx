// pages/cadastrar.tsx
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Layout from '../components/Layout';
import withAuth from '../utils/withAuth';
  import { salvarImovel } from '../utils/imovelStorage';
  import { v4 as uuidv4 } from 'uuid';
const schema = z.object({
  titulo: z.string().min(3, 'Título muito curto'),
  preco: z.string().min(1, 'Informe o preço'),
  descricao: z.string().min(5, 'Descrição muito curta'),
  imagem: z.string().url('URL inválida'),
});

type FormData = z.infer<typeof schema>;

function CadastrarImovel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const imagemPreview = watch('imagem');

  function onSubmit(data: FormData) {
  const novoImovel = {
    id: uuidv4(),
    titulo: data.titulo,
    preco: data.preco,
    descricao: data.descricao,
    imagem: data.imagem,
  };
  salvarImovel(novoImovel);
  alert('Imóvel cadastrado com sucesso!');
}

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Cadastrar Novo Imóvel</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow max-w-xl space-y-4">
        <input {...register('titulo')} placeholder="Título" className="w-full p-2 border rounded" />
        {errors.titulo && <p className="text-red-500 text-sm">{errors.titulo.message}</p>}

        <input {...register('preco')} placeholder="Preço" className="w-full p-2 border rounded" />
        {errors.preco && <p className="text-red-500 text-sm">{errors.preco.message}</p>}

        <textarea {...register('descricao')} placeholder="Descrição" className="w-full p-2 border rounded" />
        {errors.descricao && <p className="text-red-500 text-sm">{errors.descricao.message}</p>}

        <input {...register('imagem')} placeholder="URL da imagem" className="w-full p-2 border rounded" />
        {errors.imagem && <p className="text-red-500 text-sm">{errors.imagem.message}</p>}

        {imagemPreview && (
          <img src={imagemPreview} alt="Preview" className="w-full h-48 object-cover rounded" />
        )}

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Salvar Imóvel
        </button>
      </form>
    </Layout>
  );
}

export default withAuth(CadastrarImovel);
