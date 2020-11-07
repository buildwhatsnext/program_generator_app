export function tryConvertToNumber(data: any) {
  let value;

  try {
    
    value = Number.isInteger(data)
              ? data
              : Number(data);
  } catch {
    console.log(`Failed to convert ${data} to number`);
  }

  console.log(value);
  return value;
}