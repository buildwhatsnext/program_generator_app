import "reflect-metadata";
import * as CorsServices from '../../server/services/services.cors';
import connectDB from '../../server/config/config.database';
import Project from '../../server/models/model.project';

export default async function handler(req, res) {
  const { method } = req

  const connection = await connectDB.connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        // const project = await connection.manager.save<Project>(new Project());
        const repo = connection.getRepository(Project);
        const newProject = new Project();
        newProject.name = 'Popper & Popette';
        // const project = repo.create()
        const project = await repo.save(newProject);
        res.status(200).json({ success: true, payload: project })
      } catch (error) {
        res.status(400).json({ success: false, payload: error })
      }
      break;
    case 'GET':
      try {
        const api = {
          projects: ['Google', `Bobby's World`, 'Other Great Project']
        }
        res.status(200).json({ success: true, payload: api })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    default:
      res.status(400).json({ success: false })
      break
  }
}

// module.exports = CorsServices.allowCors(handler)
module.exports = handler;
