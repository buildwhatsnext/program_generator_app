import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import * as CorsServices from '../../server/services/services.cors';
import connectDB from '../../server/config/config.database';
import Project from '../../server/models/model.project';


export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
  const { method } = req

  const connection = await connectDB.connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        const newProject = new Project();
        newProject.name = 'Popper & Popette';
        const project = await connection.manager.save(newProject);
        res.status(200).json({ success: true, payload: project })
      } catch (error) {
        res.status(400).json({ success: false, payload: error })
      }
      break;
    case 'GET':
    default:
      try {
        const projects = await connection.manager.find(Project);
        res.status(200).json({ success: true, payload: projects })
      } catch (error) {
        res.status(400).json({ success: false, payload: error })
      }
      break;
  }
}

// module.exports = CorsServices.allowCors(handler)
module.exports = handler;
