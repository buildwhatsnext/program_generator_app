import { NextApiRequest, NextApiResponse } from "next";
import ProjectRepository from "../repository/repo.project";

export default abstract class BaseController {
  static handleError(error: any, req: NextApiRequest, res: NextApiResponse) {
    console.log(`Error in process: ${error}`);
    res.status(400).json({ success: false, error })
  }
}