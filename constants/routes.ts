export const ROUTES = {
  HOME: "/",
  PROJECT: {
    SELECT: "/project/select",
  },
  INFO : {
    GENERAL : "/info/general",
    CONSTRAINTS: "/info/constraints",
    TARGET: "/info/target"
  },
  PROGRAM : {
    START: "/program/start",
    ENCLOSED: '/program/enclosed',
    OPEN_PLAN: '/program/openplan',
    MEETING: '/program/meeting',
    AMENITY: '/program/amenity',
    SUPPORT: '/program/support',
    BROADCAST: '/program/broadcast',
    LAB: '/program/lab',
    ENCLOSED_UPDATE: '/program/enclosed_update',
    OPEN_PLAN_UPDATE: '/program/openplan_update',
    MEETING_UPDATE: '/program/meeting_update',
    AMENITY_UPDATE: '/program/amenity_update',
    SUPPORT_UPDATE: '/program/support_update',
    BROADCAST_UPDATE: '/program/broadcast_update',
    LAB_UPDATE: '/program/lab_update',
    END: '/program/finalize',
  },
  TRANSITION: {
    INFO: '/transition/info',
    PROJECT: '/transition/project',
    PROGRAM: '/transition/program',
  },
  ERROR: '/error'
}
