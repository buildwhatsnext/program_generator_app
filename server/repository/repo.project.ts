import { Repository } from "typeorm";
import connectDB, { DatabaseConfigType } from "../config/config.database";
import Project from '../models/model.project';

export default class ProjectRepository {
  private static repo: Repository<Project>;
  public static dbType: DatabaseConfigType;

  private static async getRepo() {
    const connection = await connectDB(this.dbType);
    const repository = connection.getRepository(Project);

    this.repo = repository;
  }

  static async getAllProjects() {
    await this.getRepo();

    const projects = await this.repo.find();

    return projects;
  }

  static async deleteAllProjects() {
    await this.getRepo();

    const projects = await this.repo.find();
    this.repo.delete(projects.map(proj => proj.id));
  }

  static async getRecentProjects() {
    await this.getRepo();

    const projects = await this.repo.find({take: 5, order: {dateModified: 'DESC'}});

    return projects;
  }

  static async getProjectById(id: string) {
    await this.getRepo();

    const project = await this.repo.findOne(id);

    return project;
  }

  static async deleteProjectById(id: string) {
    await this.getRepo();

    const result = await this.repo.delete(id);

    return result;
  }

  static async createNewProject() {
    await this.getRepo();

    const project = new Project();
    const saved = this.repo.save(project);

    return saved;
  }
}