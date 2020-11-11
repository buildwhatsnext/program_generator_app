import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import * as CorsServices from '../../server/services/services.cors';
import connectDB from '../../server/config/config.database';
import Project from '../../server/models/model.project';


export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
  const { method } = req

  // const connection = await connectDB.connectToDatabase();
  const connection = await connectDB();

  switch (method) {
    case 'POST':
      try {
        const newProject = new Project();
        const data = await connection.manager.save(newProject);
        res.status(200).json({ success: true, data })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break;
    case 'GET':
    default:
      try {
        // const projects = await connection.manager.find(Project);
        const projects = await connection.getRepository(Project).find();
        res.status(200).json({ success: true, data: projects })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break;
  }
}

// module.exports = CorsServices.allowCors(handler)
module.exports = handler;
