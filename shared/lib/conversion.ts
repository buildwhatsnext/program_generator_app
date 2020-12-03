const comma = ',';
const space = ' ';
const nothing = '';

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

export function formatLargeNumber(input: number): string {
  const number = input.valueOf();
  const value = number.toString();
  const chars = value.split('');
  const digits = chars.length;

  if(digits < 4)
    return value;

  let final = [];
  chars.reverse().forEach((char, index) => {
    if(index !== 0 && index % 3 === 0 && index !== digits)
      final.push(comma);

    final.push(char);
  })

  const reversed = final.reverse();
  const large = reversed.join('');

  return large;
}