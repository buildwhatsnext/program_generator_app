import { BaseEntity, ObjectLiteral, Repository } from "typeorm";
import { ISpace } from "../../shared/types/ISpace";
import { Space } from "../../shared/types/Space";
import connectDB from "../config/config.database";
import AbstractRepository from "./repo.abstract";

export default class SpaceRepository  {
  static repo: Repository<Space>;

  static async getRepo() {
    try {
      const connection = await connectDB();
      const repository = connection.getRepository(Space);

      this.repo = repository;
    } catch(error) {
      console.log(`There was an error connecting to the database: ${error}`);
    }
  }

  static async getAll() {
    await this.getRepo();

    const data = await this.repo.find();

    return data;
  }

  static async deleteAll() {
    await this.getRepo();

    const data = await this.repo.find();
    this.repo.delete(data.map(proj => proj.id));
  }

  static async getRecent() {
    await this.getRepo();

    const data = await this.repo.find({take: 5, order: { name: 'DESC' }});

    return data;
  }

  static async getById(id: string) {
    await this.getRepo();

    const data = await this.repo.findOne(id);

    return data;
  }

  static async deleteById(id: string) {
    await this.getRepo();

    const result = await this.repo.delete(id);

    return result;
  }

  // static async createNew() {
  //   await this.getRepo();

  //   const data = new Space();
  //   const saved = this.repo.save(data);

  //   return saved;
  // }

  static async updateData(data: Space) {
    await this.getRepo();

    const dbObj = await this.repo.findOne(data.id);
    dbObj.updateData(data);
    const updated = await this.repo.save(dbObj);

    return updated;
  }
}