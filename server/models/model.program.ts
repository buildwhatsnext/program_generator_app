import ISpaceContainer from "../../shared/types/ISpaceContainer";
import ISpaceTotalContainer from "../../shared/types/ISpaceTotalContainer";
import { EnclosedOfficeSpace, OpenOfficeSpace, MeetingSpace, AmenitySpace, SupportSpace, BroadcastSpace, LabSpace } from "../../shared/types/Space";

export interface IProgramModel extends ISpaceTotalContainer, ISpaceContainer {
  
}

export class ProgramModel implements IProgramModel {
  name: string;
  Enclosed: EnclosedOfficeSpace[];
  OpenPlan: OpenOfficeSpace[];
  Meeting: MeetingSpace[];
  Amenity: AmenitySpace[];
  Support: SupportSpace[];
  Broadcast: BroadcastSpace[];
  Lab: LabSpace[];
  totalAreaContainer: number;
  totalAreaHold: number;
  totalAreaUnprogrammed: number;
  totalAreaEnclosed: number;
  totalAreaOpen: number;
  totalAreaMeeting: number;
  totalAreaAmenity: number;
  totalAreaSupport: number;
  totalAreaBroadcast: number;
  totalAreaLab: number;
}