export const ROUTES = {
  HOME: "/",
  PROJECT: {
    SELECT: "/project/select",
    BREAKDOWN: "/project/breakdown",
  },
  INFO : {
    GENERAL : "/info/general",
    CONSTRAINTS: "/info/constraints",
    TARGET: "/info/target"
  },
  SPACE : {
    START: "/space/start",
    ENCLOSED: '/space/enclosed',
    OPEN_PLAN: '/space/openplan',
    MEETING: '/space/meeting',
    AMENITY: '/space/amenity',
    SUPPORT: '/space/support',
    BROADCAST: '/space/broadcast',
    LAB: '/space/lab',
    ENCLOSED_UPDATE: '/space/enclosed_update',
    OPEN_PLAN_UPDATE: '/space/openplan_update',
    MEETING_UPDATE: '/space/meeting_update',
    AMENITY_UPDATE: '/space/amenity_update',
    SUPPORT_UPDATE: '/space/support_update',
    BROADCAST_UPDATE: '/space/broadcast_update',
    LAB_UPDATE: '/space/lab_update',
    END: '/space/finalize',
    WRAP: '/space/wrapup',
  },
  TRANSITION: {
    INFO: '/transition/info',
    PROJECT: '/transition/project',
    SPACE: '/transition/space',
  },
  ERROR: '/error'
}
