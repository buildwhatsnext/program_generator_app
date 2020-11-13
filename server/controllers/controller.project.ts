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
      const connection = await connectDB();
      const projects = await connection.getRepository(Project).find();
      const ids = projects.map(project => project.id);
      await connection.getRepository(Project).delete(ids);
      res.status(200).json({status: `deleted all projects!`})
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async getProjectById(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id } } = req;
      const ID =  Array.isArray(id) ? id[0] : id;
      const data = ProjectRepository.getProjectById(ID);
      res.status(200).json(data)
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async deleteProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id } } = req;
      const ID =  Array.isArray(id) ? id[0] : id;
      ProjectRepository.deleteProjectById(ID);
      res.status(200).json({status: `deleted project ${ID}`})
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async saveProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id }, body } = req;
      console.log(body);
      const ID =  Array.isArray(id) ? id[0] : id;
      const connection = await connectDB();
      const project = await connection.getRepository(Project).findOne(ID);
      // const updated = Object.assign(project, body);
      project.client = body.client;
      project.hasBroadcast = body.hasBroadcast;
      project.hasLab = body.hasLab;
      // project.tenancy = body.tenancy;
      // project.units = body.units;
      // console.log(project);
      connection.getRepository(Project).update(ID, project);
      res.status(200).json(project)
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }

  static async createNewProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      // const connection = await connectDB();
      // const newProject = new Project();
      // const data = await connection.manager.save(newProject);
      // console.log(data);
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