import Project from '../../../server/models/model.project';

export interface ILoadable {
  loading: string;
}

export class LoadableProject extends Project implements ILoadable  {
  loading: string;
}