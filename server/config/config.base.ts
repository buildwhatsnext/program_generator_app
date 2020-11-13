import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import Project from '../models/model.project';

const root = process.cwd();
const entities = `${root}/server/models/*.ts`;
const migrations = `${root}/server/migrations/*.ts`;

const options: ConnectionOptions = {
  type: 'postgres',
  database: 'generator_app_base',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  // entities: [ entities ],
  entities: [ Project ],
  synchronize: true,
  logging: true,
  migrations: [ migrations ],
  migrationsRun: true
}

export default options;