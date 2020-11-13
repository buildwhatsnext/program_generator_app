import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import EntityCollection from './config.entities';

// dotenv.config();
const root = process.cwd();
const migrations = `${root}/build/server/migrations/*.js`;

const options: ConnectionOptions = {
  type: 'postgres',
  database: 'generator_app',
  url: 'postgres://tuqnnskh:qPK6lpMbUM5ovg6vPDnmEvzqVJJwKtdj@lallah.db.elephantsql.com:5432/tuqnnskh',
  logging: ['error'],
  migrations: [migrations],
  migrationsRun: true,
  entities: EntityCollection,
}

export default options;