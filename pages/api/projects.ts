import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import ProjectCtrl from "../../server/controllers/controller.project";

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
  const { method } = req

  switch (method) {
    case 'POST':
      await ProjectCtrl.createNewProject(req, res);
      break;
    case 'GET':
      await ProjectCtrl.getAllProjects(req, res);
      break;
    case 'DELETE':
      await ProjectCtrl.deleteAllProjects(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break;
  }
}

module.exports = handler;
