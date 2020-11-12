import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../config/config.database";
import Project from '../models/model.project';

export default class ProjectCtrl {
  static async getAllProjects(req: NextApiRequest, res: NextApiResponse) {
    try {
      const connection = await connectDB();
      const projects = await connection.getRepository(Project).find({take: 5, order: {dateModified: 'DESC'}});
      res.status(200).json({ success: true, data: projects })
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async getProjectById(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id } } = req;
      const ID =  Array.isArray(id) ? id[0] : id;
      const connection = await connectDB();
      const data = await connection.getRepository(Project).findOne(ID);
      res.status(200).json({ success: true, data })
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async createNewProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const connection = await connectDB();
      const newProject = new Project();
      const data = await connection.manager.save(newProject);
      res.status(200).json({ success: true, data })
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static handleError(error: any, req: NextApiRequest, res: NextApiResponse) {
    console.log(`Error in process: ${error}`);
    res.status(400).json({ success: false, error })
  }
}