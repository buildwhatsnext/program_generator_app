import { 
  AmenitySpace,
  EnclosedOfficeSpace, 
  MeetingSpace, 
  OpenOfficeSpace, 
  Space, 
  SupportSpace
} from "../../../shared/types/Space";
import SpaceFactory from "../../../shared/types/SpaceFactory";
import SpaceType from "../../../shared/types/SpaceType";

export function loadAmenitySpaces() {
  const pantry = new AmenitySpace({ name: 'Pantry / Teapoint', area: 120, seats: 0 });
  const reception = new AmenitySpace({ name: 'Reception', area: 360, seats: 0 });
  const wellness = new AmenitySpace({ name: `Wellness or Mother's Room`, area: 120, seats: 0 });

  return [pantry, reception, wellness];
}

export function loadEnclosedSpaces() {
  const priv = new EnclosedOfficeSpace({ name: 'Private Office', area: 120, seats: 1 });
  const shared = new EnclosedOfficeSpace({ name: 'Shared Office', area: 240, seats: 2 });
  const executive = new EnclosedOfficeSpace({ name: 'Executive Office', area: 240, seats: 1 });

  return [priv, shared, executive];
}

export function loadOpenPlanSpaces() {
  const bench = new OpenOfficeSpace({ name: 'Bench Workstation', area: 30, seats: 1 });
  const cubicle = new OpenOfficeSpace({ name: 'Cubicle Workstation', area: 48, seats: 1 });
  const touchdown = new OpenOfficeSpace({ name: 'Touchdown Seats', area: 25, seats: 1 });

  return [bench, cubicle, touchdown];
}

export function loadSupportSpaces() {
  const gen = new SupportSpace({ name: 'General Storage', area: 120, seats: 0 });
  const copy = new SupportSpace({ name: 'Copy Room or Copy Area', area: 80, seats: 0 });
  const mdf = new SupportSpace({ name: 'MDF', area: 240, seats: 0 });
  const idf = new SupportSpace({ name: 'IDF', area: 80, seats: 0 });
  
  return [ gen, copy, mdf, idf ];
}

export function loadMeetingSpaces() {
  const pp1 = new MeetingSpace({ name: '1-Person', area: 40, seats: 1 });
  const pp2 = new MeetingSpace({ name: '2-Person', area: 80, seats: 2 });
  const pp34 = new MeetingSpace({ name: '3-4 Person', area: 120, seats: 4 });
  const pp56 = new MeetingSpace({ name: '5-6 Person', area: 180, seats: 6 });
  const pp78 = new MeetingSpace({ name: '7-8 Person', area: 240, seats: 8 });
  const pp910 = new MeetingSpace({ name: '9-10 Person', area: 300, seats: 10 });
  const pp1112 = new MeetingSpace({ name: '11-12 Person', area: 360, seats: 12 });
  const pp1314 = new MeetingSpace({ name: '13-14 Person', area: 420, seats: 14 });
  const pp1516 = new MeetingSpace({ name: '15-16 Person', area: 480, seats: 16 });
  const pp1718 = new MeetingSpace({ name: '17-18 Person', area: 540, seats: 18 });
  const pp1920 = new MeetingSpace({ name: '19-20 Person', area: 600, seats: 20 });
  const pp24co = new MeetingSpace({ name: '2-4 Person Open Collaboration Area', area: 100, seats: 4 });
  const pp68co = new MeetingSpace({ name: '6-8 Person Open Collaboration Area', area: 200, seats: 8 });

  return [
    pp1,
    pp2,
    pp34,
    pp56,
    pp78,
    pp910 ,
    pp1112,
    pp1314,
    pp1516,
    pp1718,
    pp1920,
    pp24co,
    pp68co,
  ]
}


export function preloadSpaces<T extends Space>(type: new () => T){
  let defaultData: Space[] = null;
  const element = SpaceFactory.create(type);

  switch(element.type) {
    case SpaceType.Amenity:
      defaultData = loadAmenitySpaces();
      break;
    case SpaceType.Enclosed:
      defaultData = loadEnclosedSpaces()
      break;
    case SpaceType.Meeting:
      defaultData = loadMeetingSpaces();
      break;
    case SpaceType.OpenPlan:
      defaultData = loadOpenPlanSpaces();
      break;
    case SpaceType.Support: 
      defaultData = loadSupportSpaces();
      break;
    default:
      break;
  }

  return defaultData as T[];
}