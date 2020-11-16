import connectDB, { DatabaseConfigType } from "./config.database";

describe("Database Connector", () => {
  let dbType: DatabaseConfigType;
  jest.setTimeout(10000);

  beforeAll(() => {
    dbType = null;
  })

  it("should be able to create a connection to the LOCAL database", async () => {
    dbType = 'TEST';
    const connection = await connectDB();

    expect(connection).not.toBeNull();
    expect(connection).not.toBeUndefined()
  });

  it("should be able to create a connection to the TEST database", async () => {
    dbType = 'TEST';
    const connection = await connectDB(dbType);

    expect(connection).not.toBeNull();
    expect(connection).not.toBeUndefined()
  });

  it("should be able to create a connection to the DEBUG database", async () => {
    dbType = 'DEBUG';
    const connection = await connectDB(dbType);

    expect(connection).not.toBeNull();
    expect(connection).not.toBeUndefined()
  });

  it("should be able to create a connection to the PRODUCTION database", async () => {
    dbType = 'PRODUCTION';
    const connection = await connectDB(dbType);

    expect(connection).not.toBeNull();
    expect(connection).not.toBeUndefined()
  });
});