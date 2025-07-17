// src/imoveis/imoveis.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Imovel } from './imovel.entity';
import { CreateImovelDto } from './dto/create-imovel.dto';
import { UpdateImovelDto } from './dto/update-imovel.dto';
import { User } from '../users/user.entity';

@Injectable()
export class ImoveisService {
  constructor(
    @InjectRepository(Imovel)
    private imovelRepo: Repository<Imovel>,
  ) {}

  async criar(dto: CreateImovelDto, usuario: User): Promise<Imovel> {
    const imovel = this.imovelRepo.create({ ...dto, usuario });
    return this.imovelRepo.save(imovel);
  }

  async listarTodos(usuario: User): Promise<Imovel[]> {
    return this.imovelRepo.find({
      where: { usuario: { id: usuario.id } },
      order: { criadoEm: 'DESC' },
    });
  }

  async buscarPorId(id: string, usuario: User): Promise<Imovel> {
    const imovel = await this.imovelRepo.findOne({
      where: { id, usuario: { id: usuario.id } },
    });
    if (!imovel) throw new NotFoundException('Imóvel não encontrado');
    return imovel;
  }

  async atualizar(id: string, dto: UpdateImovelDto, usuario: User): Promise<Imovel> {
    const imovel = await this.buscarPorId(id, usuario);
    Object.assign(imovel, dto);
    return this.imovelRepo.save(imovel);
  }

  async remover(id: string, usuario: User): Promise<void> {
    const imovel = await this.buscarPorId(id, usuario);
    await this.imovelRepo.remove(imovel);
  }
}
