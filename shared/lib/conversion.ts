import { UnacceptableInputError } from "./errors";

const comma = ',';
const space = ' ';
const nothing = '';
const nonDigitPattern = '[^0,-9,]';
const nonAcceptableChars = new RegExp(nonDigitPattern, 'g');

export function tryConvertToNumber(data: any) {
  let value;

  try {
    value = Number.isInteger(data) ? data : Number(data);
  } catch {
    console.log(`Failed to convert ${data} to number`);
  }

  return value;
}

export function removeCommas(input: string): string {
  const commaGlobal = new RegExp(comma, 'g');
  const processed = input.replace(commaGlobal, nothing)
  return processed;
}

export function isNumerical(input: string) {
  return Number.isInteger(input);
}

export function convertDataToNumber(input: string): number {
  console.log(input);
  const nons = input.match(nonAcceptableChars);
  if(nons)
    throw new UnacceptableInputError('This input only takes numerical data');

  const clean = removeCommas(input);
  const pure = tryConvertToNumber(clean);
  const number = pure.valueOf();

  return number;
}

export function formatNumberInput(input: string | number): string {
  const number = !Number.isInteger(input) ? convertDataToNumber(input.toString()) : convertDataToNumber(input as string);
  const value = number.toString();
  const chars = value.split('');
  const digits = chars.length;

  if(digits < 4)
    return value;

  const final = [];
  chars.reverse().forEach((char, index) => {
    if(index !== 0 && index % 3 === 0 && index !== digits)
      final.push(comma);

    final.push(char);
  })

  const reversed = final.reverse();
  const large = reversed.join('');

  return large;
}

export function isInputOverLimit(input: string, limit?: string | number) {
  if(!limit)
    return false;

  if(!Number.isInteger(limit)){
    console.log(`The limit is: ${limit}`);
    console.log(`The limit's type is: ${typeof limit}`);
    const convLimit = convertDataToNumber(limit.toString());  
    return isInputOverLimit(input, convLimit)
  }

  const number = convertDataToNumber(input);
   
  return number > limit;
}