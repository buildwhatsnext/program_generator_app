import { createConnection } from "typeorm";
import OptionsDebug from './config.debug';
import OptionsTesting from './config.testing';

async function connectToDatabase() {
  const connection = await createConnection(OptionsDebug);
  await connection.synchronize();
      // .catch((err) => {
      //   console.log(`Failed to connect because of an error: ${err}`)
      // });

  return connection;
}

export default connectToDatabase;
