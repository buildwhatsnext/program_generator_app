import { NextApiRequest, NextApiResponse } from "next"
import ProjectCtrl from "../../../server/controllers/controller.project"

export default async function projectHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      await ProjectCtrl.getProjectById(req, res);
      break;
    case 'PUT':
      await ProjectCtrl.saveProject(req, res);
      break;
    case 'DELETE':
      await ProjectCtrl.deleteProject(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}