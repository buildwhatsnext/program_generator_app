import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import * as CorsServices from '../../server/services/services.cors';
import connectDB from '../../server/config/config.database';
import Project from '../../server/models/model.project';
import ProjectCtrl from "../../server/controllers/controller.project";

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
  const { method } = req

  switch (method) {
    case 'POST':
      await ProjectCtrl.createNewProject(req, res);
      break;
    case 'GET':
    default:
      await ProjectCtrl.getAllProjects(req, res);
      break;
  }
}

module.exports = handler;
