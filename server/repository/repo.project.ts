import { Repository } from "typeorm";
import { IProject } from "../../shared/types/Project";
import connectDB, { DatabaseConfigType } from "../config/config.database";
import ProjectModel from "../models/model.project";
import BaseRepository, { IRepository } from "./repo.abstract";

export interface IProjectRepository extends IRepository<ProjectModel> {
  createNew(): Promise<ProjectModel>;
}

export default class ProjectRepository extends BaseRepository<ProjectModel> implements IProjectRepository {
  async getRepo() {
    try {
      const connection = await connectDB();
      const repository = connection.getRepository(ProjectModel);

      this.repo = repository;
    } catch(error) {
      console.log(`There was an error connecting to the database: ${error}`);
    }
  }

  async createNew() {
    await this.getRepo();

    const obj = new ProjectModel();
    const saved = this.repo.save(obj);

    return saved;
  }

  async getRecent() {
    await this.getRepo();

    const data = await this.repo.find({take: 5, order: { dateModified: 'DESC' }});

    return data;
  }
}