import { formatNumberInput, isInputOverLimit, removeCommas } from './conversion';

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
    const original = '1000000';
    const expected = '1,000,000';

    const result = formatNumberInput(original);

    expect(result).toEqual(expected);
  });

  it('should be able to format into thousands', () => {
    const original = 1000;
    const expected = '1,000';

    const result = formatNumberInput(original);

    expect(result).toEqual(expected);
  });

  it('should not format a small number', () => {
    const original1 = 8;
    const expected1 = '8';
    const original2 = 10;
    const expected2 = '10';
    const original3 = 100;
    const expected3 = '100';

    const result1 = formatNumberInput(original1);
    const result2 = formatNumberInput(original2);
    const result3 = formatNumberInput(original3);

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
  });

  it('should reprocess numeric inputs even with commas', () => {
    const original = '5,2989';
    const expected = '52,989';

    const result = formatNumberInput(original);

    expect(result).toEqual(expected);
  });

  it('should be able to process empty inputs too', () => {
    const original = null;
    const expected = '';

    const result = formatNumberInput(original);

    expect(result).toEqual(expected);
  });

  it('should not accept non-comma characters', () => {
    const withLetters = '5fgd2989';
    const withPunctuation = '5,.[!2989';

    expect(() => formatNumberInput(withLetters)).toThrowError();
    expect(() => formatNumberInput(withPunctuation)).toThrowError();
  });

  it('should give a heads up if an input is over the limit', () => {
    const input = '1,506';
    const limit = 1500;

    const result = isInputOverLimit(input, limit);

    expect(result).toBeTruthy();
  })

  it('should return false if under the limit', () => {
    const input = '1,499';
    const limit = 1500;

    const result = isInputOverLimit(input, limit);

    expect(result).not.toBeTruthy();
  })

  it('should return true if the input is over a zero limit', () => {
    const input = '1';
    const limit = 0;

    const result = isInputOverLimit(input, limit);

    expect(result).toBeTruthy();
  })
})