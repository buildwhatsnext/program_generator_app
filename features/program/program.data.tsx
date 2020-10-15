const INITIAL_PROGRAM_DATA = {
  name: '',
  overview: {
    general: {
      units: '',
      tenancy: '',
    },
    basic: {
      area_gross: '',
      area_net: '',
      floors: '',
      factor_circulation: '',
      factor_planning: '',
    },
    totals: {
      total_offices: '',
      total_open_workspaces: '',
      total_meeting_spaces: '',
      total_amenity_spaces: '',
      total_support_spaces: '',
      total_workseats: '',
      ratio: '',
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