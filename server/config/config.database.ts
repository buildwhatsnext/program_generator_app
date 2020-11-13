import { Connection, ConnectionOptions, createConnection, getConnection, getConnectionManager } from "typeorm";
import OptionsDebug from './config.debug';
import OptionsTesting from './config.testing';
import OptionsProduction from './config.production';
import OptionsBase from './config.base';

export type DatabaseConfigType = 'TEST' | 'DEBUG' | 'PRODUCTION';

function setDatabaseOptions(dbType?: DatabaseConfigType ) {
  let opts: ConnectionOptions;

  switch(dbType) {
    case 'PRODUCTION':
      opts = OptionsProduction;
      break;
    case 'TEST':
      opts = OptionsTesting;
      break;
    case 'DEBUG':
      opts = OptionsDebug;
      break;
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
    const options = setDatabaseOptions(dbType);
    connection = await createConnection(options);
  } catch (error) {
    console.log('Something failed: ');
    console.log(error);
  }

  return connection;
}

export default connectDB;
