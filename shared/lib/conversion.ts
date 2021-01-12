import { UnacceptableInputError } from "./errors";
import { ISpace, ISpaceDisplayObject } from '../types/ISpace';
import { Space } from '../types/Space';

const comma = ',';
const space = ' ';
const nothing = '';
const nonDigitPattern = '[^0,-9,]';
const nonAcceptableChars = new RegExp(nonDigitPattern, 'g');
const commaGlobal = new RegExp(comma, 'g');

export function tryConvertToNumber(data: any): number {
  let value: number;

  try {
    value = Number.isInteger(data) ? data : Number(data);
  } catch {
    console.log(`Failed to convert ${data} to number`);
  }

  return value;
}

export function hasCommas(input: string): boolean {
  return input.match(commaGlobal).length > 0;
}

export function removeCommas(input: string): string {
  const processed = input.replace(commaGlobal, nothing)
  return processed;
}

export function isNumerical(input: string) {
  return Number.isInteger(input);
}

export function convertDataToNumber(input: unknown): number {

  if(input === undefined || input === null)
    return;

  if(Number.isInteger(input))
    return Number(input);

  const nons = input.match(nonAcceptableChars);
 
  if(nons)
    // throw new UnacceptableInputError('This input only takes numerical data');
    alert(input);

  const clean = removeCommas(input);
  const pure = tryConvertToNumber(clean);
  const number = pure.valueOf();

  return number;
}

export function formatNumberInput(input: unknown): string {

  if(input === undefined || input === null)
    alert(input);

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
  if(limit === null || limit === undefined)
    return false;

  if(!Number.isInteger(limit)){
    const convLimit = convertDataToNumber(limit.toString());  
    return isInputOverLimit(input, convLimit)
  }

  const number = convertDataToNumber(input);
   
  return number > limit;
}

export function processSpatialData<T extends ISpace | ISpaceDisplayObject>(data :T[]) {
  const processed = data.map(s => convertTransitObjectToSpace(s as ISpaceDisplayObject))

  return processed;
}

export function convertTransitObjectToSpace(data: ISpaceDisplayObject): Partial<ISpace> {
  const { id, name, seats, ratio, area, quantitySelected, seatTotal, areaTotal, type } = data;

  const seatsFmt = convertDataToNumber(seats);
  const areaFmt = convertDataToNumber(area);
  const seatsTotalFmt = convertDataToNumber(seatTotal);
  const areaTotalFmt = convertDataToNumber(areaTotal)
  const qtySelFmt = convertDataToNumber(quantitySelected);

  const converted = {
    id,
    name,
    seats: seatsFmt,
    area: areaFmt,
    ratio,
    quantitySelected: qtySelFmt,
    seatTotal: seatsTotalFmt,
    areaTotal: areaTotalFmt,
    type
  }

  return converted;
}