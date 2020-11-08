import { ConnectionOptions } from 'typeorm';
import path from 'path';
import Project from '../models/model.project';

const root = path.resolve(__dirname, '../../');

const options: ConnectionOptions = {
  type: "sqlite",
  database: `${root}/data/debug.sqlite`,
  entities: [ Project ],
  logging: true
}

export default options;