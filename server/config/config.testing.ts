import { ConnectionOptions } from 'typeorm';
import path from 'path';

const root = path.resolve(__dirname, '../../');

const options: ConnectionOptions = {
  type: "sqlite",
  database: `${root}/data/testing.sqlite`,
  // entities: [ User, Message ],
  logging: true
}

export default options;