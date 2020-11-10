import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import path from 'path';
import Project from '../models/model.project';

dotenv.config();

const root = path.resolve(__dirname, '../../');

const options: ConnectionOptions = {
  type: 'postgres',
  url: 'postgres://tuqnnskh:qPK6lpMbUM5ovg6vPDnmEvzqVJJwKtdj@lallah.db.elephantsql.com:5432/tuqnnskh',
  entities: [ Project ],
  logging: true
  // type: "mysql",
  // host: "",
  // port: 3306,
  // username: 'psmith',
  // password: 'Welcome2HLW',
  // database: 'testwilson',
  // entities: [ Project ],
  // logging: true
}

export default options;