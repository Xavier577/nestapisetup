import { Module } from '@nestjs/common';
import { KnexProvider } from './knex.provider';
import { ConfigModule } from '@nestjs/config';
import { Repository } from '@internal/postgres/repository';

@Module({
  imports: [ConfigModule],
  providers: [KnexProvider, Repository],
  exports: [KnexProvider, Repository],
})
export class PostgresModule {}
