import * as CorsServices from '../../server/services/services.cors';
import connectDB from '../../server/config/config.database';
import Project from '../../server/models/model.project';

export default async function handler(req, res) {
  const { method } = req

  const connection = await connectDB();

  switch (method) {
    case 'POST':
      try {
        const repo = connection.getRepository<Project>(Project);
        const newProject = repo.create();
        const data = newProject;
        res.status(200).json({ success: true, payload: data })
      } catch (error) {
        res.status(400).json({ success: false })
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

module.exports = CorsServices.allowCors(handler)
