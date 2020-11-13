import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import path from 'path';
import Project from '../models/model.project';

const root = process.cwd();
// const entities = `${root}/server/models/*.ts`;

const options: ConnectionOptions = {
  database: 'generator_app',
  type: 'postgres',
  url: 'postgres://xxcucpor:KpdDuca5BNUggj-hCdmbO1vrFfDQ_Cc6@lallah.db.elephantsql.com:5432/xxcucpor',
  entities: [ Project ],
  synchronize: true,
  // entities: [ __dirname + '../models/**/*.ts' ],
  logging: ['error']
}



export default options;