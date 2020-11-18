import { NextApiRequest, NextApiResponse } from "next";
import { SpaceModel } from "../models/model.space";
import SpaceRepo from '../repository/repo.space';
import BaseCtrl from "./controller.abstract";

export default class SpaceCtrl extends BaseCtrl<SpaceModel> {
  getRepo() {
    return new SpaceRepo();
  }
}