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
}