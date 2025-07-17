import {
  Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req
} from '@nestjs/common';
import { ImovelService } from './imoveis.service';
import { CreateImovelDto } from './dto/create-imovel.dto';
import { UpdateImovelDto } from './dto/update-imovel.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('imoveis')
export class ImoveisController {
  constructor(private readonly imovelService: ImovelService) {}

  @Post()
  criar(@Body() dto: CreateImovelDto, @Req() req) {
    return this.imovelService.criar(dto, req.user);
  }

  @Get()
  listar(@Req() req) {
    return this.imovelService.listarTodos(req.user);
  }

  @Get(':id')
  buscar(@Param('id') id: string, @Req() req) {
    return this.imovelService.buscarPorId(id, req.user);
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() dto: UpdateImovelDto, @Req() req) {
    return this.imovelService.atualizar(id, dto, req.user);
  }

  @Delete(':id')
  remover(@Param('id') id: string, @Req() req) {
    return this.imovelService.remover(id, req.user);
  }
}
