import { BaseEntity, ObjectLiteral, Repository } from "typeorm";
import connectDB, { DatabaseConfigType } from "../config/config.database";

export default abstract class AbstractRepository<T extends ObjectLiteral> {
  protected repo: Repository<T>;
  public dbType: DatabaseConfigType;

  async getRepo(type: () => T) {
    try {
      const connection = await connectDB(this.dbType);
      const repository = connection.getRepository<T>(type);

      this.repo = repository;
    } catch(error) {
      console.log(`There was an error connecting to the database: ${error}`);
    }
  }

  static async getAll() {
    await this.getRepo();

    const projects = await this.repo.find();

    return projects;
  }
}

