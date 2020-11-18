import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import ProjectCtrl from "../../server/controllers/controller.project";

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
  const { method } = req;
  const ctrl = new ProjectCtrl();

  switch (method) {
    case 'POST':
      await ctrl.createNewProject(req, res);
      break;
    case 'GET':
      await ctrl.getAll(req, res);
      break;
    case 'DELETE':
      await ctrl.deleteAll(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break;
  }
}

module.exports = handler;
