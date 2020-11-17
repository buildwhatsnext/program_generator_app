import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../config/config.database";
import Project from '../models/model.project';
import ProjectRepository from "../repository/repo.project";

export default class ProjectCtrl {
  static async getAllProjects(req: NextApiRequest, res: NextApiResponse) {
    try {
      const projects = await ProjectRepository.getAllProjects();
      res.status(200).json(projects)
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async deleteAllProjects(req: NextApiRequest, res: NextApiResponse) {
    try {
      await ProjectRepository.deleteAllProjects();
      res.status(200).json({status: `deleted all projects!`})
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async getProjectById(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id } } = req;
      const ID =  Array.isArray(id) ? id[0] : id;
      const data = await ProjectRepository.getProjectById(ID);
      res.status(200).json(data)
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async deleteProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id } } = req;
      const ID =  Array.isArray(id) ? id[0] : id;
      await ProjectRepository.deleteProjectById(ID);
      res.status(200).json({status: `deleted project ${ID}`})
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async saveProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id }, body } = req;
      const project = await ProjectRepository.updateProject({...body});
      res.status(200).json(project)
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async createNewProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const data = await ProjectRepository.createNewProject();
      res.status(200).json(data)
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static handleError(error: any, req: NextApiRequest, res: NextApiResponse) {
    console.log(`Error in process: ${error}`);
    res.status(400).json({ success: false, error })
  }
}