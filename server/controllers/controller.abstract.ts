import { NextApiRequest, NextApiResponse } from "next";
import { IUpdateable } from "../../shared/types/ICanUpdate";
import { IRepository } from '../repository/repo.abstract';

export default abstract class BaseController<T extends IUpdateable> {
  abstract getRepo(): IRepository<T>;

  handleError(error: any, req: NextApiRequest, res: NextApiResponse) {
    console.log(`Error in process: ${error}`);
    res.status(400).json({ success: false, error })
  }

  async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      const repo = this.getRepo();
      const data = await repo.getAll();
      res.status(200).json(data)
    } catch(error) {
      this.handleError(error, req, res);
    }
  }

  async deleteAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      const repo = this.getRepo();
      await repo.deleteAll();
      res.status(200).json({status: `deleted all projects!`})
    } catch(error) {
      this.handleError(error, req, res);
    }
  }

  async getById(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id } } = req;
      const ID =  Array.isArray(id) ? id[0] : id;
      const repo = this.getRepo();
      const data = await repo.getById(ID);
      res.status(200).json(data)
    } catch(error) {
      this.handleError(error, req, res);
    }
  }

  async delete(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { query: { id } } = req;
      const ID =  Array.isArray(id) ? id[0] : id;
      const repo = this.getRepo();
      await repo.deleteById(ID);
      res.status(200).json({status: `deleted project ${ID}`})
    } catch(error) {
      this.handleError(error, req, res);
    }
  }
}