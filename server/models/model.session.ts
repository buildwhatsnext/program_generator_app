import { IProject } from '../../shared/types/Project';
import { ISession } from '../../shared/types/Session';
import { IUser } from '../../shared/types/User';


export class SessionModel implements ISession {
  application: string;
  company: string;
  user: IUser;
  currentProject: IProject;
  recentProjects: IProject[];
  loading: string;
  
}