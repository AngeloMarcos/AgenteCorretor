import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('imoveis')
export class Imovel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column()
  imagem: string;

  @Column({ nullable: true })
  descricao?: string;

  @Column({ nullable: true })
  localizacao?: string;

  @Column({ nullable: true })
  tipo?: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  criadoEm: Date;
}
