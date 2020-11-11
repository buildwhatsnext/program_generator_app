import { Connection, createConnection, getConnection } from "typeorm";
import OptionsDebug from './config.debug';
import OptionsTesting from './config.testing';
import OptionsProduction from './config.production';

class DatabaseConnector {
  static connection: Connection;

  static connectToDatabase = async () => {
    const opts = process.env.IS_PROD ? OptionsProduction : OptionsDebug;
    
    try {
      DatabaseConnector.connection = getConnection();
    } catch (error) {
      console.log(`Failed to connect because of an error:`)
      console.log(error);
    }

    if(!DatabaseConnector.connection) {
      DatabaseConnector.connection = await createConnection(opts);
    }
  
    await DatabaseConnector.connection.synchronize();
  
    return DatabaseConnector.connection;
  }
}

export default DatabaseConnector;
