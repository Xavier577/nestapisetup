import { Logger, Provider } from '@nestjs/common';
import knex from 'knex';
import { ConfigService } from '@nestjs/config';
import * as process from 'process';
import Deasyncify from 'deasyncify';
import * as pg from 'pg';
import promisifyKnexRaw from '@utils/promisify-knex-raw';

export const KNEX_PROVIDER = Symbol('Knex');

const logger = new Logger('Knex');

export const KnexProvider: Provider = {
  provide: KNEX_PROVIDER,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    // parse numeric types as floats
    pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);
    pg.types.setTypeParser(pg.types.builtins.INT8, Number);

    const knexClient = knex({
      client: 'pg',
      connection: {
        host: configService.get<string>('PG_HOST'),
        port: configService.get<number>('PG_PORT'),
        database: configService.get<string>('PG_DATABASE'),
        user: configService.get<string>('PG_USER'),
        password: configService.get<string>('PG_PASSWORD'),
        ssl: configService.get<boolean>('DATABASE_SSL')
          ? { rejectUnauthorized: false }
          : false,
      },
      debug: configService.get<boolean>('KNEX_DEBUG'),
    });

    let retry = configService.get<number>('DATABASE_RETRY');

    while (retry > 0) {
      // check db connection
      const [data, err] = await Deasyncify.watch(
        promisifyKnexRaw(knexClient.raw('SELECT current_database();')),
      );

      retry -= 1;

      if (err != null) {
        logger.error(err);

        logger.log(`Failed to connect to database ........ retry (${retry})`);

        if (retry < 1) {
          logger.error('Exiting....');
          process.exit(1);
        }

        continue;
      }

      logger.log(
        `Successfully connect to ${data?.['rows']?.[0]?.['current_database']} database`,
      );

      return knexClient;
    }
  },
};
