import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfig } from '@src/config/env';

@Module({
  imports: [ConfigModule.forRoot({ validate: EnvConfig.validate })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
