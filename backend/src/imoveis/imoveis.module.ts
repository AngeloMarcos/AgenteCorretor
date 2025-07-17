import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Imovel } from './imovel.entity';
import { ImovelService } from './imoveis.service';
import { ImoveisController } from './imoveis.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Imovel])],
  providers: [ImovelService],
  controllers: [ImoveisController],
})
export class ImoveisModule {}
