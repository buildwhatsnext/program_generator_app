import { formatLargeNumber, formatNumberInput, removeCommas } from './conversion';

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

  it('should reprocess numeric inputs even with commas', () => {
    const original = '5,2989';
    const expected = '52,989';

    const result = formatNumberInput(original);

    expect(result).toEqual(expected);
  });

  it('should not accept non-comma characters', () => {
    const withLetters = '5fgd2989';
    const withPunctuation = '5,.[!2989';

    expect(() => formatNumberInput(withLetters)).toThrowError();
    expect(() => formatNumberInput(withPunctuation)).toThrowError();
  });

})