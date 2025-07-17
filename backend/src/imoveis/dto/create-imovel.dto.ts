import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImovelDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  preco: string;

  @IsString()
  imagem?: string;
}
