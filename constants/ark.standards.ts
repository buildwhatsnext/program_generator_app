interface SpaceDisplayStandard {
  name: string;
  color: string;
  border?: string;
}

export const SPACE_STANDARDS: { [name: string]: SpaceDisplayStandard } = {
  UNPLANNED: {
    name: 'Unplanned',
    color: '#ffffff',
    border: '#06038D'
  },
  CIRCULATION: {
    name: 'Circulation',
    color: '#c4c4c4'
  },
  ENCLOSED_OFFICE: {
    name: 'Offices',
    color: '#06038D'
  },
  OPEN_OFFICE_AREA: {
    name: 'Open Office Area',
    color: '#0097cc'
  },
  MEETING: {
    name: 'Meeting Spaces',
    color: '#ffcc00'
  },
  AMENITY: {
    name: 'Amenity/Special',
    color: '#F08A02'
  },
  SUPPORT: {
    name: 'Support',
    color: '#92d050'
  },
  BROADCAST: {
    name: 'Broadcast',
    color: '#7030A0'
  },
  LAB: {
    name: 'Lab',
    color: '#ff0000'
  },
}
