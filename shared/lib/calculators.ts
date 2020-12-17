import { Space } from "../types/Space";
import SpaceType from "../types/SpaceType";
import { tryConvertToNumber } from "./conversion";

/**
 * 
 * @param total keeps track of the aggregated total of the counter
 * @param current 
 */
export const sumTotals = (total: number, current: number) => total + current;

/**
 * @param workseats the total number of workseats in the program
 * @param area the total programmed area
 */
export function calculateWorkseatRatio(workseats: number, area: number): number {
  if(workseats === 0 || area === 0)
    return 0.0;

  const ratio = (workseats/area)

  return Number.isNaN(ratio) 
    ? 0.0 
    : Number(ratio.toFixed(2));
}

/**
 * @param workseats the total number of workseats in the program
 * @param meetingSeats the total number of meeting seats in the program
 */
export function calculateCollaborationRatio(workseats: number, meetingSeats: number): number {
  if(workseats === 0 || meetingSeats === 0)
    return 0.0;

  const ratio = (workseats/meetingSeats)

  return Number.isNaN(ratio) 
    ? 0.0 
    : Number(ratio.toFixed(2));
}

/**
 * @summary calculates the area that should be held over
 * @param area the gross area of the program
 * @param circFactor the circulation factor as a percentage
 * @param lossFactor the loss factor as a percentage
 */
export function calculateHoldArea(area: number, circFactor: number, lossFactor: number): number {
  const areNull = [area, circFactor, lossFactor].some(x => x === null || x === undefined);
  if(areNull)
    return 0;

  const circ = Number.isInteger(circFactor) ? circFactor : tryConvertToNumber(circFactor);
  const loss = Number.isInteger(lossFactor) ? lossFactor : tryConvertToNumber(lossFactor);
  
  const factorTotal = circ + loss;
  const percent = factorTotal / 100;

  const coreArea = Number((area * percent).toFixed(2));

  return coreArea;
}

/**
 * @summary calculates the remaining area that has not been planned yet
 * @param area the gross area of the program
 * @param circFactor the circulation factor as a percentage
 * @param lossFactor the loss factor as a percentage
 */
export function calculateUnplannedArea(area: number, circFactor: number, lossFactor: number): number {
  const areaHeld = calculateHoldArea(area, circFactor, lossFactor);
  const leftover = area - areaHeld;
  return leftover;
}

export function calculateTotalWorkseats(spaces: Space[]) {
  const workspaces = spaces.filter(space => space.type === SpaceType.Enclosed || space.type === SpaceType.OpenPlan);

  const total = workspaces?.map(space => space.seatTotal).reduce(sumTotals);

  return total;
}