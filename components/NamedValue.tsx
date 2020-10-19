import React from 'react';
import styles from './NamedValue.module.scss';

export const NamedValue = (props: INamedValue) => {
  const { name, value, className, nameClass, valueClass } = props;

  return (
    <div className={className ?? `${styles.data}`}>
      <p className={nameClass ?? `${styles.data__name}`}>{name}</p>
      <p className={valueClass ?? `${styles.data__value}`}>{value}</p>
    </div>
    // <div className={`${className} ${styles.data}`}>
    //   <p className={`${className}__name ${styles.data__name}`}>{name}</p>
    //   <p className={`${className}__value ${styles.data__value}`}>{value}</p>
    // </div>
  );
};

export interface INamedValue {
  name: string;
  value: string;
  className?: string;
  nameClass?: string;
  valueClass?: string;
}

export function convertDataToNamedValues(data: Record<string, string>) {
  // const names = Object.getOwnPropertyNames(data);
  const names = Object.keys(data);

  const result = names.map((n, i) => (
    <NamedValue key={i} name={n} value={data[n]} />
  ));

  return result;
}

export function convertDataToINamedValues(
  data: Record<string, unknown>
): Array<INamedValue> {

  try {
    const names = Object.keys(data);

    const result = names.map((n) => ({ name: n, value: data[n].toString() }));
  
    return result;  
  } catch (error) {
    return null;
  }
}
