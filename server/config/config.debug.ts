import { ConnectionOptions } from 'typeorm';
import path from 'path';
import Project from '../models/model.project';

const root = process.cwd();
const entities = `${root}/server/models/*.ts`;

const options: ConnectionOptions = {
  name: 'debug',
  type: "sqlite",
  database: `${root}/data/debug.sqlite`,
  // entities: [ entities ],
  entities: [ Project ],
  logging: true
}

export default options;