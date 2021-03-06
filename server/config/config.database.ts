import { Connection, ConnectionOptions, createConnection, getConnection, getConnectionManager } from "typeorm";
import OptionsDebug from './config.staging';
import OptionsTesting from './config.testing';
import OptionsProduction from './config.production';
import OptionsBase from './config.base';

export type DatabaseConfigType = 'TEST' | 'STAGING' | 'PRODUCTION' | 'LOCAL';

function setDatabaseOptions(dbType?: DatabaseConfigType ) {
  let opts: ConnectionOptions;

  const mode = dbType || process.env.APP_ENV;

  switch(mode) {
    case 'PRODUCTION':
      opts = OptionsProduction;
      break;
    case 'TEST':
      opts = OptionsTesting;
      break;
    case 'STAGING':
      opts = OptionsDebug;
      break;
    case 'LOCAL':
    default:
      opts = OptionsBase;
      break;
  }

  return opts;
}

const connectDB = async (dbType?: DatabaseConfigType): Promise<Connection> => {
  let connection: Connection;
  try {
    const connectionManager = getConnectionManager();

    if(connectionManager.has('default')) {
      await getConnectionManager().get().close();
    }
    console.log(`We're running the app in ${process.env.APP_ENV} MODE`);
    const options = setDatabaseOptions(dbType);
    connection = await createConnection(options);
    // connection = await createConnection(OptionsBase);
  } catch (error) {
    console.log('Something failed: ');
    console.log(error);
  }

  return connection;
}

export default connectDB;
