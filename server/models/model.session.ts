import { Entity } from 'typeorm';
import { IProject } from '../../shared/types/Project';
import { ISession } from '../../shared/types/Session';
import { IUser } from '../../shared/types/User';

// @Entity({name: 'Sessions'})
export class SessionModel implements ISession {
  id: string;
  application: string;
  company: string;
  user: IUser;
  currentProject: IProject;
  recentProjects: IProject[];
  loading: string;
  
}