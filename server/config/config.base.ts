import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import EntityCollection from './config.entities';

const root = process.cwd();
const migrations = `${root}/build/server/migrations/*.js`;

const options: ConnectionOptions = {
  type: 'postgres',
  database: 'generator_app_base',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  logging: true,
  migrations: [ migrations ],
  migrationsRun: true,
  entities: EntityCollection,
  synchronize: true,
}

export default options;