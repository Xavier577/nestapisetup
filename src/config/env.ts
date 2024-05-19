import { AppEnv } from '@src/internal/enums';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';
import { DtoValidationError, validateDto } from '@src/utils/validator-utils';
import { defaultTo } from 'lodash';

export class EnvConfig {
  @IsString()
  @IsNotEmpty()
  AUTH_JWT_SECRET: string;

  @IsNumber()
  @IsOptional()
  DATABASE_RETRY = 3;

  @IsBoolean()
  @IsOptional()
  DATABASE_SSL = false;

  @IsString()
  @IsEnum(AppEnv)
  @IsOptional()
  NODE_ENV = AppEnv.DEVELOPMENT;

  @IsBoolean()
  @ValidateIf((obj, value) => {
    obj.KNEX_DEBUG = defaultTo(value, obj.NODE_ENV === AppEnv.DEVELOPMENT);
    return value != null;
  })
  KNEX_DEBUG: boolean;

  @IsString()
  @IsNotEmpty()
  MQ_CONNECTION_URL: string;

  @IsString()
  @IsOptional()
  PORT = 8000;

  @IsString()
  @IsNotEmpty()
  REDIS_URL: string;

  @IsString()
  @IsNotEmpty()
  PG_HOST: string;

  @IsString()
  @IsNotEmpty()
  PG_PORT: string;

  @IsString()
  @IsNotEmpty()
  PG_USER: string;

  @IsString()
  @IsNotEmpty()
  PG_PASSWORD: string;

  @IsString()
  @IsNotEmpty()
  PG_DATABASE: string;

  @IsString()
  @IsNotEmpty()
  WEB_CLIENT_BASE_URL: string;

  static validate(value: Record<string, any>): EnvConfig {
    try {
      return validateDto(value, EnvConfig, { stopAtFirstError: false });
    } catch (e) {
      if (e instanceof DtoValidationError) {
        throw new Error(JSON.stringify(e.messages));
      }
    }
  }
}
