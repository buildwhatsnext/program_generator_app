import { NextApiRequest, NextApiResponse } from "next";
import ProjectModel from "../models/model.project";
import { IRepository } from "../repository/repo.abstract";
import ProjectRepository, { IProjectRepository } from "../repository/repo.project";
import BaseController from "./controller.abstract";

export default class ProjectCtrl extends BaseController<ProjectModel> {
  getRepo(): IProjectRepository {
    return new ProjectRepository();
  }

  async createNewProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const repo = this.getRepo();
      const data = await repo.createNew();
      res.status(200).json(data)
    } catch(error) {
      this.handleError(error, req, res);
    }
  }

  async saveProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id }, body } = req;
      const repo = this.getRepo();
      const updated = await repo.updateData({...body});
      res.status(200).json(updated)
    } catch(error) {
      this.handleError(error, req, res);
    }
  }

  async getRecents(req: NextApiRequest, res: NextApiResponse) {
    try {
      const repo = this.getRepo();
      const projects = await repo.getRecents();
      res.status(200).json(projects);
    } catch(error) {
      this.handleError(error, req, res);
    }
  }
}