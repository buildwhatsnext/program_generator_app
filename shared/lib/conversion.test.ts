import { formatLargeNumber, removeCommas } from './conversion';

describe('Converter', () => {

  it('should be able to remove commas for thousands', () => {
    const original = '1,000';
    const expected = '1000';

    const result = removeCommas(original);

    expect(result).toEqual(expected);
  });

  it('should be able to remove commas for millions', () => {
    const original = '1,000,000';
    const expected = '1000000';

    const result = removeCommas(original);

    expect(result).toEqual(expected);
  });

  it('should be able to format into millions', () => {
    const original = 1000000;
    const expected = '1,000,000';

    const result = formatLargeNumber(original);

    expect(result).toEqual(expected);
  });

  it('should be able to format into thousands', () => {
    const original = 1000;
    const expected = '1,000';

    const result = formatLargeNumber(original);

    expect(result).toEqual(expected);
  });

  it('should not format a small number', () => {
    const original = 100;
    const expected = '100';

    const result = formatLargeNumber(original);

    expect(result).toEqual(expected);
  });

})