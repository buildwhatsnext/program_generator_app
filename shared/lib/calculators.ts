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
