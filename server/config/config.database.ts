import "reflect-metadata";
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


// createConnection()
//   .then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: ", user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
