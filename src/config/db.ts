import {} from 'pg-promise';

export function configureDb() {
  const pg = pgp({ promiseLib: promise, noWarnings: true });

  const connectionOptions = {
    connectionString: options.databaseUrl,
    max: options.pgMaxConnectionPool ?? 300,
  };

  if (options.MAX_SQL_EXEC_TIME != null) {
    this.maxSqlExecTime = options.MAX_SQL_EXEC_TIME;
  }

  pg(connectionOptions);
}
