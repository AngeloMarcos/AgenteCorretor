import { IsOptional, IsString } from 'class-validator';

export class UpdateImovelDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  preco?: string;

  @IsOptional()
  @IsString()
  imagem?: string;
}
