import { NextApiRequest, NextApiResponse } from "next"
import ProjectCtrl from "../../../server/controllers/controller.project"

export default async function projectHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const ctrl = new ProjectCtrl();

  switch (method) {
    case 'GET':
      await ctrl.getById(req, res);
      break;
    case 'PUT':
      await ctrl.saveProject(req, res);
      break;
    case 'DELETE':
      await ctrl.delete(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}