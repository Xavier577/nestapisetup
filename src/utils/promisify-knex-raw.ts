import { Knex } from 'knex';

export default async function promisifyKnexRaw<T = any>(
  r: Knex.Raw<T>,
): Promise<T> {
  return new Promise((resolve, reject) => {
    r.then(<() => T>resolve).catch(reject);
  });
}
