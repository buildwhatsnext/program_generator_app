import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import EntityCollection from './config.entities';

const root = process.cwd();
const migrations = `${root}/build/server/migrations/*.js`;

const options: ConnectionOptions = {
  database: 'generator_app',
  type: 'postgres',
  url: 'postgres://xxcucpor:KpdDuca5BNUggj-hCdmbO1vrFfDQ_Cc6@lallah.db.elephantsql.com:5432/xxcucpor',
  logging: ['error'],
  migrations: [migrations],
  migrationsRun: true,
  entities: EntityCollection,
  synchronize: true,
}

export default options;