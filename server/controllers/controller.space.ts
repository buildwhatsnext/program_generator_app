import { NextApiRequest, NextApiResponse } from "next";
import SpaceRepo from '../repository/repo.space';
import BaseController from "./controller.abstract";

export default class SpaceCtrl extends BaseController {
  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      const data = await SpaceRepo.getAll();
      res.status(200).json(data)
    } catch(error) {
      this.handleError(error, req, res);
    }
  }
}