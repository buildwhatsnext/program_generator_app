import { BuildingModel } from '../models/model.building';
import { ClientModel } from '../models/model.client';
import { FloorModel } from '../models/model.floor';
import { ProgramModel } from '../models/model.program';
import ProjectModel from '../models/model.project';
import { SessionModel } from '../models/model.session';
import { SpaceModel } from '../models/model.space';
import SpaceTypeModel from '../models/model.spacetype';
import { UserModel } from '../models/model.user';

const models = [
  BuildingModel,
  ClientModel,
  FloorModel,
  ProgramModel,
  ProjectModel, 
  SessionModel,
  SpaceModel,
  SpaceTypeModel,
  UserModel,
];

export default models;