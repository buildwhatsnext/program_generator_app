import React from 'react';
import styles from './NamedValue.module.scss';

export const NamedValue = (props: INamedValue) => {
  const { name, unitValue, unitType, className, nameClass, unitValueClass, unitTypeClass } = props;

  return (
    <div className={className ?? `${styles.data}`}>
      <p className={nameClass ?? `${styles.data__name}`}>{name}</p>
      <p className={unitValueClass ?? `${styles.data__unitValue}`}>{unitValue}</p>
      <p className={unitTypeClass ?? `${styles.data__unitType}`}>{unitType}</p>
    </div>
  );
};

export interface INamedValue {
  name: string;
  unitValue: string;
  unitType: string;
  error?: boolean;
  className?: string;
  nameClass?: string;
  unitValueClass?: string;
  unitTypeClass?: string;
}

export function convertDataToNamedValues(data: Record<string, string>) {
  // const names = Object.getOwnPropertyNames(data);
  const names = Object.keys(data);

  const result = names.map((n, i) => (
    <NamedValue key={i} name={n} unitValue={data[n]} unitType={data[n]} />
  ));

  return result;
}

export function convertDataToINamedValues(
  data: Record<string, unknown>
): Array<INamedValue> {

  try {
    const names = Object.keys(data);

    const result = names.map((n) => ({ 
      name: n, 
      value: data[n].toString() 
    }));
  
    return result;  
  } catch (error) {
    return [{
      name: null,
      unitValue: null,
      unitType: null,
      error: true
    }]
  }
}
