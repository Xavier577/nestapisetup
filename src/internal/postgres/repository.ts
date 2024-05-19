import { Inject, Injectable } from '@nestjs/common';
import { KNEX_PROVIDER } from '@internal/postgres/knex.provider';
import { Knex } from 'knex';
import { DynamicObject } from '@internal/types';

@Injectable()
export class Repository<T> {
  constructor(@Inject(KNEX_PROVIDER) public readonly kx: Knex) {}

  /**
   * creates a knex query object for a specified table
   * @param table table name
   * @param excluded fields which should be excluded from the query result to be returned
   * @returns
   */
  public queryBuilder(table: string, excluded?: string[]) {
    return this.kx<T>(table).queryContext({ excluded });
  }

  public raw(sql: string, bindings?: DynamicObject | any[]) {
    return this.kx.raw(sql, bindings);
  }

  public createBuilder(table: string, excluded?: string[]) {
    return () => this.queryBuilder(table, excluded);
  }
}
