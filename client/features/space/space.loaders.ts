import { 
  AmenitySpace,
  EnclosedOfficeSpace, 
  MeetingSpace, 
  OpenOfficeSpace, 
  Space, 
  SupportSpace,
  BroadcastSpace,
  LabSpace,
} from "../../../shared/types/Space";
import SpaceFactory from "../../../shared/types/SpaceFactory";
import SpaceType from "../../../shared/types/SpaceType";

export function loadAmenitySpaces() {
  const cafeSeating = new AmenitySpace({ name: `Cafeteria / Seating`, area: 0, seats: 0 });
  const cafeServery = new AmenitySpace({ name: `Cafeteria / Servery`, area: 0, seats: 0 });
  const cafeBoh = new AmenitySpace({ name: `Cafeteria / Back-of-House`, area: 0, seats: 0 });
  const pantry = new AmenitySpace({ name: 'Pantry / Teapoint', area: 120, seats: 0 });
  const kitchen = new AmenitySpace({ name: `Kitchen`, area: 0, seats: 0 });
  const lounge = new AmenitySpace({ name: `Lounge`, area: 0, seats: 0 });
  const fitEquip = new AmenitySpace({ name: `Fitness / Equipment`, area: 0, seats: 0 });
  const fitStudio = new AmenitySpace({ name: `Fitness / Studio`, area: 0, seats: 0 });
  const fitLock = new AmenitySpace({ name: `Fitness / Locker Rooms`, area: 0, seats: 0 });
  const vcroom = new AmenitySpace({ name: `Telepresence or Special VC Room`, area: 0, seats: 0 });
  const training = new AmenitySpace({ name: `Training Room`, area: 0, seats: 0 });
  const reception = new AmenitySpace({ name: 'Reception', area: 360, seats: 0 });
  const assembly = new AmenitySpace({ name: `Assembly Space`, area: 0, seats: 0 });
  const wellness = new AmenitySpace({ name: `Wellness or Mother's Room`, area: 0, seats: 0 });
  const multifunction = new AmenitySpace({ name: `Multi-Functional Space`, area: 0, seats: 0 });
  const library = new AmenitySpace({ name: `Library`, area: 0, seats: 0 });
  const nap = new AmenitySpace({ name: `Nap Room`, area: 0, seats: 0 });
  const showroom = new AmenitySpace({ name: `Demo Room or Showroom`, area: 0, seats: 0 });

  return [
    cafeSeating,
    cafeServery,
    cafeBoh,
    pantry, 
    kitchen,
    lounge,
    fitEquip,
    fitStudio,
    fitLock,
    vcroom,
    training, 
    reception,
    assembly, 
    wellness,
    multifunction,
    library,
    nap,
    showroom,
  ];
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
  const coat = new SupportSpace({ name: 'Coat Closet', area: 0, seats: 0 });
  const gen = new SupportSpace({ name: 'General Storage', area: 120, seats: 0 });
  const kit = new SupportSpace({ name: 'Kitchen Storage', area: 0, seats: 0 });
  const food = new SupportSpace({ name: 'Food Storage', area: 0, seats: 0 });
  const lock = new SupportSpace({ name: 'Lockers (Non-Fitness)', area: 0, seats: 0 });
  const mail = new SupportSpace({ name: 'Mail Room', area: 0, seats: 0 });
  const ship = new SupportSpace({ name: 'Shipping Room', area: 0, seats: 0 });
  const copy = new SupportSpace({ name: 'Copy Room or Copy Area', area: 80, seats: 0 });
  const filex = new SupportSpace({ name: 'File Room (Enclosed)', area: 0, seats: 0 });
  const fileo = new SupportSpace({ name: 'File Room (Open)', area: 0, seats: 0 });
  const tech = new SupportSpace({ name: 'Tech Stop / Help Desk', area: 0, seats: 0 });
  const ware = new SupportSpace({ name: 'Warehouse', area: 0, seats: 0 });
  const mdf = new SupportSpace({ name: 'MDF', area: 240, seats: 0 });
  const idf = new SupportSpace({ name: 'IDF', area: 80, seats: 0 });
  const wc = new SupportSpace({ name: 'Restrooms (Non-Core)', area: 0, seats: 0 });
  const mep = new SupportSpace({ name: 'MEP (Non-Core)', area: 0, seats: 0 });
  
  return [
    coat, 
    gen,
    kit,
    food,
    lock,
    mail,
    ship, 
    copy,
    filex,
    fileo,
    tech,
    ware, 
    mdf, 
    idf, 
    wc,
    mep,
  ];
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

export function loadBroadcastSpaces() {
  const master = new BroadcastSpace({ name: 'Master Control Room', area: 0, seats: 0 });
  const stucon = new BroadcastSpace({ name: 'Studio Control Room', area: 0, seats: 0 });
  const audio = new BroadcastSpace({ name: 'Audio Control Room', area: 0, seats: 0 });
  const other = new BroadcastSpace({ name: 'Other Control Room', area: 0, seats: 0 });
  const green = new BroadcastSpace({ name: 'Green Room', area: 0, seats: 0 });
  const engin = new BroadcastSpace({ name: 'Engineering Shop', area: 0, seats: 0 });
  const editx = new BroadcastSpace({ name: 'Edit Station (Open)', area: 0, seats: 0 });
  const edito = new BroadcastSpace({ name: 'Edit Room or Suite (Enclosed)', area: 0, seats: 0 });
  const dress = new BroadcastSpace({ name: 'Dressing Room', area: 0, seats: 0 });
  const makeup = new BroadcastSpace({ name: 'Make Up Area (Open)', area: 0, seats: 0 });
  const rack = new BroadcastSpace({ name: 'Rack Room or Equipment Center', area: 0, seats: 0 });
  const studio = new BroadcastSpace({ name: 'Studio', area: 0, seats: 0 });
  const voice = new BroadcastSpace({ name: 'Voice-Over Room', area: 0, seats: 0 });
  const newsx = new BroadcastSpace({ name: 'Newsroom Office (Enclosed)', area: 0, seats: 0 });
  const newso = new BroadcastSpace({ name: 'Newsroom Desk (Open)', area: 0, seats: 0 });
  const flash = new BroadcastSpace({ name: 'Flash Camera Position', area: 0, seats: 0 });
  const prop = new BroadcastSpace({ name: 'Prop Storage', area: 0, seats: 0 });
  const equip = new BroadcastSpace({ name: 'Equipment Storage', area: 0, seats: 0 });
  const locker = new BroadcastSpace({ name: 'Lockers', area: 0, seats: 0 });
  const lounge = new BroadcastSpace({ name: 'Lounge', area: 0, seats: 0 });


  return [
    master,
    stucon,
    audio,
    other,
    green,
    engin,
    editx,
    edito,
    dress,
    makeup,
    rack,
    studio,
    voice,
    newsx,
    newso,
    flash,
    prop,
    equip,
    locker,
    lounge,
  ]
}

export function loadLabSpaces() {
  const wet = new LabSpace({ name: 'Wet Lab Bench', area: 0, seats: 0 });
  const dry = new LabSpace({ name: 'Dry Lab Bench', area: 0, seats: 0 });
  const clean = new LabSpace({ name: 'Clean Room', area: 0, seats: 0 });
  const lab = new LabSpace({ name: 'Lab Storage', area: 0, seats: 0 });
  const fume = new LabSpace({ name: 'Fume Hood', area: 0, seats: 0 });


  return [
    wet,
    dry,
    clean,
    lab,
    fume,
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
    case SpaceType.Broadcast: 
      defaultData = loadBroadcastSpaces();
      break;  
    case SpaceType.Lab: 
      defaultData = loadLabSpaces();
      break;
    default:
      break;
  }

  console.log(defaultData);
  return defaultData as T[];
}

// display issue - page that actually displays - add a function that does conversion from imperial to metric
// conversion.ts - write a test