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
      factor_circulation: 0.0,
      factor_planning: 0.0,
    },
    area: {
      area_total: 0,
      area_unplanned: 0,
      area_circulation: 0,
      area_enclosed: 0,
      area_open: 0,
      area_meeting: 0,
      area_amenity: 0,
      area_support: 0,
      area_broadcast: 0,
      area_lab: 0,
    },
    totals: {
      total_program_area: 0,
      workseat_ratio: 0,
      total_number_of_workseats: 0,
      collaboration_ratio: 0,
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