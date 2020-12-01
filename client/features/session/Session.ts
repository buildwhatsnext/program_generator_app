import * as uuid from 'uuid';
import { IProject } from "../../../shared/types/Project";
import { ISession } from "../../../shared/types/Session";
import { IUser } from "../../../shared/types/User";
import { LoadingState } from '../../../shared/types/LoadingStates';

export class Session implements ISession {
  id: string;
  application: string;
  company: string;
  loading: string;
  // currentProject: IProject;
  recentProjects: IProject[];
  user: IUser;

  constructor() {
    this.id = uuid.v4();
    this.application = 'program generator';
    this.company = 'hlw';
    this.loading = 'idle';
    // this.currentProject = null;
    this.recentProjects = [];
    this.user = null;
  }
}