import {
  EnclosedOfficeSpace,
  OpenOfficeSpace,
  MeetingSpace,
  AmenitySpace,
  SupportSpace,
  BroadcastSpace,
  LabSpace,
} from './Space';

export default interface ISpaceContainer {
  Enclosed: EnclosedOfficeSpace[]
  OpenPlan: OpenOfficeSpace[]
  Meeting: MeetingSpace[]
  Amenity: AmenitySpace[]
  Support: SupportSpace[]
  Broadcast: BroadcastSpace[]
  Lab: LabSpace[]
}