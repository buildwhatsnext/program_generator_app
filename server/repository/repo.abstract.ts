import { Repository } from 'typeorm';
import { IUpdateable } from '../../shared/types/ICanUpdate';
import { DatabaseConfigType } from '../config/config.database';

export interface IRepository<T> {
  repo: Repository<T>;
  getRepo();
  getAll(): Promise<T[]>;
  deleteAll();
  getById(id: string): Promise<T>;
  deleteById(id: string);
  updateData(data: T);
}

export default abstract class BaseRepository<T extends IUpdateable> implements IRepository<T> {
  repo: Repository<T>;
  dbType: DatabaseConfigType;
  abstract async getRepo();

  constructor(_dbType?: DatabaseConfigType) {
    this.dbType = _dbType || null;
  }
  
  async getAll() : Promise<T[]> {
    await this.getRepo();

    const projects = await this.repo.find();

    return projects;
  }

  async deleteAll() {
    await this.getRepo();

    const data = await this.repo.find();
    this.repo.delete(data.map(obj => obj.id));
  }

  async getById(id: string) {
    await this.getRepo();

    const data = await this.repo.findOne(id, {
       loadEagerRelations: true,
       relations: ['spaces']
      });

    return data;
  }
  
  async deleteById(id: string) {
    await this.getRepo();

    const result = await this.repo.delete(id);

    return result;
  }

  async updateData(data: Partial<T>): Promise<T> {
    await this.getRepo();

    // const dbObj = await this.repo.findOne(data.id);
    // dbObj.updateData(data);
    // const updated = await this.repo.save(dbObj as any);
    const dbObj = data as any;
    console.log(dbObj);
    const updated = await this.repo.save(dbObj);

    return updated;
  }
}
