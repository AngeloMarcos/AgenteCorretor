// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ImoveisModule } from './imoveis/imoveis.module';
import { User } from './users/user.entity';
import { Imovel } from './imoveis/imovel.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'agente_corretor',
      entities: [User, Imovel],
      synchronize: true, // Apenas para dev; use migrations em produção
    }),
    UsersModule,
    AuthModule,
    ImoveisModule,
  ],
})
export class AppModule {}
