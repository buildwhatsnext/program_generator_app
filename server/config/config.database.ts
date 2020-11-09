import { Connection, createConnection, getConnection } from "typeorm";
import OptionsDebug from './config.debug';
import OptionsTesting from './config.testing';

class DatabaseConnector {
  static connection: Connection;

  static connectToDatabase = async () => {
    const opts = OptionsDebug;
    
    try {
      DatabaseConnector.connection = getConnection(opts.name)
    } catch (error) {
      console.log(`Failed to connect because of an error: ${error}`)
    }
  
    if(!DatabaseConnector.connection) {
      DatabaseConnector.connection = await createConnection(opts);
    }
  
    await DatabaseConnector.connection.synchronize();
  
    return DatabaseConnector.connection;
  }
}

export default DatabaseConnector;
