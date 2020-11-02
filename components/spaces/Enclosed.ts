import { Space, SpaceType } from './Space';

export class EnclosedOfficeSpace extends Space {
  setSpaceType() {
    this.type = SpaceType.Enclosed;
  }
}