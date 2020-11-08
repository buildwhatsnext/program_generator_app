import { IProject } from "../../../shared/types/Project";
import { ISession } from "../../../shared/types/Session";
import { IUser } from "../../../shared/types/User";
import { LoadingState } from '../../../shared/types/LoadingStates';

export class Session implements ISession {
  application: 'program generator';
  company: 'hlw';
  loading: string;
  currentProject: IProject;
  recentProjects: IProject[];
  user: IUser;
}