import { ConnectionOptions } from 'typeorm';
import Project from '../models/model.project';

const options: ConnectionOptions = {
    database: 'generator_app',
    type: 'postgres',
    // url: 'postgres://xxcucpor:KpdDuca5BNUggj-hCdmbO1vrFfDQ_Cc6@lallah.db.elephantsql.com:5432/xxcucpor',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [ Project ],
    synchronize: true,
    logging: true
}

export default options;