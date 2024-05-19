import { Logger } from '@nestjs/common';
import pgp from 'pg-promise';
import * as moment from 'moment';

interface DALOptions {
  databaseUrl: string;
  /**
   * default is 300s
   */
  MAX_SQL_EXEC_TIME?: number;

  env?: 'production' | 'development';

  /**
   * default is 300
   */
  pgMaxConnectionPool?: number;
}

export type NamedParamsObj = { [name: string]: any };

// Initialize postgres database
let instance: any = null;

export class DAL {
  private db: any;
  public tx: any;
  static ENV: string;
  private maxSqlExecTime = 300;

  static setEnvironment(env: string) {
    this.ENV = env;
  }

  constructor(options: DALOptions, private readonly logger: Logger) {
    if (instance === null) {
      const pg = pgp({ noWarnings: true });
      const connectionOptions = {
        connectionString: options.databaseUrl,
        max: options.pgMaxConnectionPool ?? 300,
      };

      if (options.MAX_SQL_EXEC_TIME != null) {
        this.maxSqlExecTime = options.MAX_SQL_EXEC_TIME;
      }

      this.db = pg(connectionOptions);

      // don't implement this just assign same name
      this.tx = this.db.tx;

      instance = this;
    }
    return instance;
  }

  public async connect(): Promise<void> {
    try {
      const obj = await this.db.connect();
      obj.done();
    } catch (error) {
      throw error;
    }
  }

  async any<T = any>(
    query: string,
    payload?: any[] | NamedParamsObj,
  ): Promise<T> {
    try {
      if (payload != null) {
        return this.db.any(query, payload);
      }

      return this.db.any(query);
    } catch (ex) {
      ex.message = `POSTGRESDB::ANY::EX:: ${query.replace(
        /\s+/g,
        ' ',
      )} ${payload} ${ex.message}`;
      throw ex;
    }
  }

  async one<T = any>(
    query: string,
    payload?: any[] | NamedParamsObj,
  ): Promise<T> {
    try {
      if (payload) {
        return this.db.one(query, payload);
      }

      return this.db.one(query);
    } catch (ex) {
      ex.message = `POSTGRESDB::ANY::EX:: ${query.replace(
        /\s+/g,
        ' ',
      )} ${payload} ${ex.message}`;
      throw ex;
    }
  }

  async oneOrNone<T = any>(
    query: string,
    payload?: any[] | NamedParamsObj,
  ): Promise<T> {
    try {
      if (payload) {
        return this.db.oneOrNone(query, payload);
      }

      return this.db.oneOrNone(query);
    } catch (ex) {
      ex.message = `POSTGRESDB::ANY::EX:: ${query.replace(
        /\s+/g,
        ' ',
      )} ${payload} ${ex.message}`;
      throw ex;
    }
  }

  async none(
    query: string,
    payload?: any[] | { [name: string]: any },
  ): Promise<void> {
    try {
      if (payload) {
        return this.db.none(query, payload);
      }

      return this.db.none(query);
    } catch (ex) {
      ex.message = `POSTGRESDB::ANY::EX:: ${query.replace(
        /\s+/g,
        ' ',
      )} ${payload} ${ex.message}`;
      throw ex;
    }
  }

  async manyOrNone<T = any>(
    query: string,
    payload?: any[] | { [name: string]: any },
  ): Promise<T[]> {
    try {
      if (payload) {
        return this.db.manyOrNone(query, payload);
      }

      return this.db.manyOrNone(query);
    } catch (ex) {
      ex.message = `POSTGRESDB::ANY::EX:: ${query.replace(
        /\s+/g,
        ' ',
      )} ${payload} ${ex.message}`;
      throw ex;
    }
  }
}
