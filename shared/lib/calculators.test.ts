import { calculateHoldArea, calculateUnplannedArea } from "./calculators";

describe('The Calculator', () => {

  it('should be able to calculate hold area at the start of the program', () => {
    const area = 15000;
    const circFactor = 0;
    const lossFactor = 0;
    const expected = 0;

    const result = calculateHoldArea(area, circFactor, lossFactor);

    expect(result).toEqual(expected);
  })

  it('should be able to calculate hold area correctly', () => {
    const area = 15000;
    const circFactor = 5;
    const lossFactor = 5;
    const expected = 1500;

    const result = calculateHoldArea(area, circFactor, lossFactor);

    expect(result).toEqual(expected);
  })

  it('should be able to calculate unplanned area correctly', () => {
    const area = 15000;
    const circFactor = 5;
    const lossFactor = 5;
    const expected = 13500;

    const result = calculateUnplannedArea(area, circFactor, lossFactor);

    expect(result).toEqual(expected);
  })

  it('should be able to calculate unplanned area even when passed strings', () => {
    const area = 15000;
    const circFactor = '5';
    const lossFactor = '5';
    const expected = 13500;

    const result = calculateUnplannedArea(area, circFactor, lossFactor);

    expect(result).toEqual(expected);
  })

  it('should be able to calculate unplanned area even when passed null or undefined', () => {
    const area = 15000;
    const circFactor = null;
    const lossFactor = undefined;
    const expected = 15000;

    const result = calculateUnplannedArea(area, circFactor, lossFactor);

    expect(result).toEqual(expected);
  })
});