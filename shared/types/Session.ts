import { IProject } from './Project';
import { IUser } from './User';
import { LoadingState } from './LoadingStates';

export interface ISession {
  application: string;
  company: string;
  user: IUser;
  // currentProject: IProject;
  recentProjects: Array<IProject>;
  loading: string;
}