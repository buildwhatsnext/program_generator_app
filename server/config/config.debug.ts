import { ConnectionOptions } from 'typeorm';
import path from 'path';

const root = path.resolve(__dirname, '../../');

const options: ConnectionOptions = {
  type: "sqlite",
  database: `${root}/data/debug.sqlite`,
  // entities: [ User, Message ],
  logging: true
}

export default options;