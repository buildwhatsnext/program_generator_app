import { ConnectionOptions } from 'typeorm';
import EntityCollection from './config.entities';

const root = process.cwd();
const migrations = `${root}/build/server/migrations/*.js`;

const options: ConnectionOptions = {
  database: 'generator_app',
  type: 'postgres',
  url: 'postgres://fviuhhso:zKlZq7oVauEflKNvIsjDIgOv-YIooCpL@suleiman.db.elephantsql.com:5432/fviuhhso',
  logging: true,
  migrations: [migrations],
  migrationsRun: true,
  entities: EntityCollection,
  synchronize: true
}

export default options;