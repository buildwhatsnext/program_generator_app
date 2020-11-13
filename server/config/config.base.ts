import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import EntityCollection from './config.entities';

const root = process.cwd();
const entities = `${root}/build/server/models/*.js`;
const migrations = `${root}/build/server/migrations/*.js`;

const options: ConnectionOptions = {
  type: 'postgres',
  database: 'generator_app_base',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  // entities: [ entities ],
  synchronize: true,
  logging: true,
  migrations: [ migrations ],
  migrationsRun: true,
  entities: EntityCollection,
}

export default options;