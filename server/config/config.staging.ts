import { ConnectionOptions } from 'typeorm';
import EntityCollection from './config.entities';

const root = process.cwd();
const migrations = `${root}/build/server/migrations/*.js`;

const options: ConnectionOptions = {
  type: 'postgres',
  database: 'generator_app',
  url: 'postgres://oyufhamq:jNddanQLmXyrT8stIkV4k7b8v6lfitEX@ruby.db.elephantsql.com:5432/oyufhamq',
  logging: ['error'],
  migrations: [migrations],
  migrationsRun: true,
  entities: EntityCollection,
  synchronize: true,
}

export default options;