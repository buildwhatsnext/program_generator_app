import { ISpace, ISpaceDisplayObject } from "../types/ISpace";
import { Space } from "../types/Space";
import SpaceType from "../types/SpaceType";
import { convertDataToNumber, removeCommas, tryConvertToNumber } from "./conversion";

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
export function calculateUnplannedArea(area: number, areaHold: number, areaProgram: number): number {
  const combined = areaHold + areaProgram
  const leftover = area - combined;
  return leftover;
}

export function calculateTotalWorkseats(spaces: Partial<Space>[]) {
  const workspaces = spaces.filter(space => space.type === SpaceType.Enclosed || space.type === SpaceType.OpenPlan);

  if(!workspaces || workspaces.length < 1)
    return 0;

  const total = workspaces?.map(space => {
    return Number.isInteger(space.seatTotal)
      ? space.seatTotal
      : tryConvertToNumber(space.seatTotal)
  }).reduce(sumTotals);

  return total;
}

export function calculateWorkspaceArea(spaces: Partial<Space>[]) {
  if(!spaces || spaces.length < 1)
    return 0;

  const workspaces = spaces.filter(space => space.type === SpaceType.Enclosed || space.type === SpaceType.OpenPlan);

  if(!workspaces || workspaces.length < 1)
    return 0;

  const totals = workspaces?.map(space => {
    const conv = tryConvertToNumber(space.areaTotal);
    console.log(conv);
    return Number.isInteger(space.areaTotal)
      ? space.areaTotal
      : tryConvertToNumber(space.areaTotal)
  });

  const finalTotal = totals.reduce(sumTotals);

  return finalTotal;
}

export function calculateProgrammedArea(spaces: Partial<Space>[]) {
  const total = spaces?.map(space => {
    return Number.isInteger(space.areaTotal)
      ? space.areaTotal
      : tryConvertToNumber(space.areaTotal)
  })?.reduce(sumTotals);

  return total;
}

export function calculateUnprogrammedArea(area: number, spaces: Partial<Space>[]) {
  const programmed = calculateProgrammedArea(spaces);
  const total = area - programmed;

  return total;
}

export const calculateTotalArea = (data: ISpaceDisplayObject) => {
  const { area, quantitySelected } = data;
  
  const areaFmt = convertDataToNumber(area);
  const qtyFmt = convertDataToNumber(quantitySelected);

  const totalArea = areaFmt * qtyFmt;

  return totalArea;
}

export const calculateTotalSeats = (row: ISpaceDisplayObject) => {
  const { seats, quantitySelected } = row;

  const seatsFmt = convertDataToNumber(seats);
  const qtyFmt = convertDataToNumber(quantitySelected);

  const totalArea = seatsFmt * qtyFmt;

  return totalArea;
}