import React from 'react';
import styles from './NamedValue.module.scss';

export const NamedValue = (props: INamedValue) => {
  const { name, value } = props;

  return (
    <div className={styles.data}>
      <p className={styles.data__name}>{name}</p>
      <p className={styles.data__value}>{value}</p>
    </div>
  );
};

export interface INamedValue {
  name: string;
  value: string;
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
  data: Record<string, string>
): Array<INamedValue> {

  try {
    const names = Object.keys(data);

    const result = names.map((n) => ({ name: n, value: data[n] }));
  
    return result;  
  } catch (error) {
    return null;
  }
}
