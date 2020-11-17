import { NextApiRequest, NextApiResponse } from "next";
import SpaceRepo from '../repository/repo.space';

export default class SpaceCtrl {
  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      const projects = await SpaceRepo.getAll();
      res.status(200).json(projects)
    } catch(error) {
      ProjectCtrl.handleError(error, req, res);
    }
  }
}