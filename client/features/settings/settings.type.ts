import { IProject, IUser } from '../project/project.type';

export interface ISettings {
  application: string;
  company: string;
  user: IUser;
  projects: {
    current: IProject;
    recents: Array<IProject>;
  };
}
