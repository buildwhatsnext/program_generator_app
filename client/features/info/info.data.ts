const INITIAL_PROJECT_OVERVIEW = {
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
  // area: {
  //   area_total: 0,
  //   area_unplanned: 0,
  //   area_circulation: 0,
  //   area_enclosed: 0,
  //   area_open: 0,
  //   area_meeting: 0,
  //   area_amenity: 0,
  //   area_support: 0,
  //   area_broadcast: 0,
  //   area_lab: 0,
  // },
  totals: {
    total_program_area: 0,
    workseat_ratio: 0,
    total_number_of_workseats: 0,
    collaboration_ratio: 0,
  },
}

export default INITIAL_PROJECT_OVERVIEW;