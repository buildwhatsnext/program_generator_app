// import * as dotenv from 'dotenv';
// import { ConnectionOptions } from 'typeorm';
// import EntityCollection from './server/config/config.entities';

const root = process.cwd();
const migrations = `${root}/build/server/migrations/*.js`;
const entities = `${root}/build/server/models/*.js`;

const options = {
  driver: 'postgres',
  type: 'postgres',
  database: 'generator_app_base',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  synchronize: true,
  logging: true,
  migrations: [ migrations ],
  migrationsRun: true,
  entities: [ entities ],
  // dropSchema: true
}

// export default options;