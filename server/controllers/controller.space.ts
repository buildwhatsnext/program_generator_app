import { NextApiRequest, NextApiResponse } from "next";
import SpaceRepo from '../repository/repo.space';
import BaseCtrl from "./controller.abstract";

export default class SpaceCtrl extends BaseCtrl {
  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      const data = await SpaceRepo.getAll();
      res.status(200).json(data)
    } catch(error) {
      this.handleError(error, req, res);
    }
  }

  
  static async deleteAllProjects(req: NextApiRequest, res: NextApiResponse) {
    try {
      await SpaceRepo.deleteAll();
      res.status(200).json({status: `deleted all projects!`})
    } catch(error) {
      BaseCtrl.handleError(error, req, res);
    }
  }

  static async getProjectById(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id } } = req;
      const ID =  Array.isArray(id) ? id[0] : id;
      const data = await SpaceRepo.getById(ID);
      res.status(200).json(data)
    } catch(error) {
      BaseCtrl.handleError(error, req, res);
    }
  }

  static async deleteProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id } } = req;
      const ID =  Array.isArray(id) ? id[0] : id;
      await SpaceRepo.deleteById(ID);
      res.status(200).json({status: `deleted project ${ID}`})
    } catch(error) {
      BaseCtrl.handleError(error, req, res);
    }
  }

  static async saveProject(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id }, body } = req;
      const project = await SpaceRepo.updateData({...body});
      res.status(200).json(project)
    } catch(error) {
      BaseCtrl.handleError(error, req, res);
    }
  }

  // static async createNewProject(req: NextApiRequest, res: NextApiResponse) {
  //   try {
  //     const data = await SpaceRepo.createNew();
  //     res.status(200).json(data)
  //   } catch(error) {
  //     BaseCtrl.handleError(error, req, res);
  //   }
  // }
}