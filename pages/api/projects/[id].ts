import { NextApiRequest, NextApiResponse } from "next"
import ProjectCtrl from "../../../server/controllers/controller.project"

export default async function projectHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      await ProjectCtrl.getProjectById(req, res);
      break
    case 'PUT':
      // Update or create data in your database
      // res.status(200).json({ id, name: name || `User ${id}` })
      console.log('Save request received');
      await ProjectCtrl.saveProject(req, res);
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}