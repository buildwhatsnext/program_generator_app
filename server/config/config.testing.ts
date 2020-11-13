import { ConnectionOptions } from 'typeorm';
import Project from '../models/model.project';

const options: ConnectionOptions = {
  database: 'generator_app',
  type: 'postgres',
  url: 'postgres://fviuhhso:zKlZq7oVauEflKNvIsjDIgOv-YIooCpL@suleiman.db.elephantsql.com:5432/fviuhhso',
  // host: 'localhost',
  // port: 5432,
  // username: 'postgres',
  // password: 'admin',
  entities: [ Project ],
  synchronize: true,
  logging: true,
}

export default options;