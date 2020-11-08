import { IProject } from '../../../shared/types/Project';
import { IUser } from '../../../shared/types/User';

export interface ISettings {
  application: string;
  company: string;
  user: IUser;
  projects: {
    current: IProject;
    recents: Array<IProject>;
  };
}
