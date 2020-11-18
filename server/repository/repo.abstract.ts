import { EntityTarget, Entity, Repository, ObjectLiteral } from 'typeorm';
import ProjectModel from '../models/model.project';



export default abstract class BaseRepository<T> {
  protected repo: Repository<T>;
  abstract async getRepo();
  
  async getAll() : Promise<T[]> {
    await this.getRepo();

    const projects = await this.repo.find();

    return projects;
  }
}

// import { BaseEntity, ObjectLiteral, Repository } from "typeorm";
// import { IHasId } from "../../shared/types/Project";
// import { Space } from "../../shared/types/Space";
// import connectDB, { DatabaseConfigType } from "../config/config.database";
// import ProjectModel from "../models/model.project";
// import { SpaceModel } from "../models/model.space";

// export interface IDbObj {
//   <T>(arg: T): T;
//   name: string;
// }

// interface IRepository<T> {
//   (arg: T): T;
// }

// enum DbObjects {
//   Unknown = 'Unknown',
//   Project = 'Project',
//   SpaceObj = 'Space'
// }

// class BaseRepo implements IRepository<TypeOrmEntityTarget> {
//   protected abstract async getRepo<TypeOrmEntityTarget>();
//   protected getAll<TypeOfClassInPrestonsProject>() {
//     // Implemented
//   }
// }

// class ProjectRepo extends BaseRepo<ProjectModel> {
//   protected final static = ProjectModel;


//   protected async getRepo<? extends TypeOrmEntityTarget>() {
//     return connection.getRepository(ProjectModel);
//   }
// }


// export default abstract class BaseRepository<T> implements IRepository<T> {
//   protected repo: Repository<T>;
//   public dbType: DatabaseConfigType;
//   type: E;

//   protected async getRepo() {
//     // 1
//     const repo = Repo;
//     const projects = repo.getAll<Project>(); // Array<T>
//     doStuff(projects) // <-- Array<Projects>
//     // 2

//     try {
//       const connection = await connectDB(this.dbType);
//       // const repository = connection.getRepository<T>(type);
//       const repository = connection.getRepository(type);

//       this.repo = repository;
//     } catch(error) {
//       console.log(`There was an error connecting to the database: ${error}`);
//     }
//   }

//   async getAll<E>() : Promise<E[]> {

//     const connection = await connectDB(this.dbType);
//     const repository = connection.getRepository<>();
//     // await this.getRepo(T);

//     const projects = await this.repo.find();

//     return projects;
//   }
// }

