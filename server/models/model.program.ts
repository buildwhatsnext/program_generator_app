import { IProgram } from "../../shared/types/Program";
import { EnclosedOfficeSpace, OpenOfficeSpace, MeetingSpace, AmenitySpace, SupportSpace, BroadcastSpace, LabSpace } from "../../shared/types/Space";

export class ProgramModel implements IProgram {
  name: string;
  Enclosed: EnclosedOfficeSpace[];
  OpenPlan: OpenOfficeSpace[];
  Meeting: MeetingSpace[];
  Amenity: AmenitySpace[];
  Support: SupportSpace[];
  Broadcast: BroadcastSpace[];
  Lab: LabSpace[];
  EnclosedState: string[];
  OpenPlanState: string[];
  MeetingState: string[];
  AmenityState: string[];
  SupportState: string[];
  BroadcastState: string[];
  LabState: string[];
  totalAreaBuilding: number;
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