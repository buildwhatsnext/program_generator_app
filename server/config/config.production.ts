import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import path from 'path';
import Project from '../models/model.project';

dotenv.config();

const root = path.resolve(__dirname, '../../');

const options: ConnectionOptions = {
  type: 'mysql',
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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