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
      // res.status(200).json({ id, name: `User ${id}` })
      await ProjectCtrl.getProjectById(req, res);
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}