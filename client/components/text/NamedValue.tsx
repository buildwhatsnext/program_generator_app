import React from 'react';
import styles from './NamedValue.module.scss';

export const NamedValue = (props: INamedValue) => {
  const { name, value, type, className, nameClass, valueClass, typeClass } = props;

  return (
    <div className={className ?? `${styles.data}`}>
      <p className={nameClass ?? `${styles.data__name}`}>{name}</p>
      <p className={valueClass ?? `${styles.data__value}`}>{value}</p>
      <p className={typeClass ?? `${styles.data__type}`}>{type}</p>
    </div>
  );
};

export interface INamedValue {
  name: string;
  value: string;
  type: string;
  error?: boolean;
  className?: string;
  nameClass?: string;
  valueClass?: string;
  typeClass?: string;
}

export function convertDataToNamedValues(data: Record<string, string>) {
  // const names = Object.getOwnPropertyNames(data);
  const names = Object.keys(data);

  const result = names.map((n, i) => (
    <NamedValue key={i} name={n} value={data[n]} type={n} />
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
      value: data[n].toString(),
      type : n,
    }));
  
    return result;  
  } catch (error) {
    return [{
      name: null,
      value: null,
      type: null,
      error: true
    }]
  }
}
