import connectDB from "../config/config.database";
import { SpaceModel } from "../models/model.space";
import BaseRepository from "./repo.abstract";

export default class SpaceRepository extends BaseRepository<SpaceModel> {
  async getRepo() {
    try {
      const connection = await connectDB();
      const repository = connection.getRepository(SpaceModel);

      this.repo = repository;
    } catch(error) {
      console.log(`There was an error connecting to the database: ${error}`);
    }
  }

  async getRecent() {
    await this.getRepo();

    const data = await this.repo.find({take: 5, order: { name: 'DESC' }});

    return data;
  }
}