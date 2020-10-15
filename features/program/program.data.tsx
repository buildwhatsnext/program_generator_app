import { IBuildingProgram } from './program.type';

// const INITIAL_PROGRAM_DATA: IBuildingProgram = {
const INITIAL_PROGRAM_DATA = {
  name: '',
  overview: {
    general: {
      client: '',
      units: 'unknown',
      tenancy: 'unknown',
      hasBroadcast: false,
      hasLab: false,
    },
    basic: {
      area_gross: 0,
      area_net: 0,
      floors: 0,
      factor_circulation: '',
      factor_planning: '',
    },
    totals: {
      total_offices: 0,
      total_open_workspaces: 0,
      total_meeting_spaces: 0,
      total_amenity_spaces: 0,
      total_support_spaces: 0,
      total_workseats: 0,
      ratio: 0,
    },
  },
  spaces: {
    enclosed_offices: [
      {
        name: '',
        seats: '',
        ratio: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
    ],
    open_plan_workspaces: [
      {
        name: '',
        seats: '',
        ratio: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
    ],
    meeting_spaces: [
      {
        name: '',
        seats: '',
        ratio: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
    ],
    amenity_spaces: [
      {
        name: '',
        seats: '',
        ratio: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
    ],
    support_spaces: [
      {
        name: '',
        seats: '',
        ratio: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
    ],
    broadcast_spaces: [
      {
        name: '',
        seats: '',
        ratio: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
    ],
    lab_spaces: [
      {
        name: '',
        seats: '',
        ratio: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
    ],
  },
  floors: [
    {
      name: '',
      enclosed_offices: {
        seats: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
      open_plan_workspaces: {
        seats: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
      meeting_spaces: {
        seats: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
      amenity_spaces: {
        seats: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
      support_spaces: {
        seats: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
      broadcast_spaces: {
        seats: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
      lab_spaces: {
        seats: '',
        area: '',
        qty_selected: '',
        seats_total: '',
        area_total: '',
      },
    },
  ]
};

export default INITIAL_PROGRAM_DATA;