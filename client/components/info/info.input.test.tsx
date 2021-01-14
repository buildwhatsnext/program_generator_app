import { NumberInputBox } from '../../components/info/input';

describe('NumberInputBox Input Options and Outcomes', () => {
  it('should process numerical values', () => {
    const NIB = {...new NumberInputBox()};
    const input = 10;
    const expected = 10;

    expect(NIB(input)).toEqual(expected);
  });
})