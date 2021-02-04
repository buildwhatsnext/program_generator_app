import React from 'react';
import styles from './NamedValue.module.scss';

export const NamedValue = (props: INamedValue) => {
  const { name, ProjectName, value, className, nameClass, ProjectNameClass, valueClass } = props;

  return (
    <div className={className ?? `${styles.data}`}>
      <p className={nameClass ?? `${styles.data__name}`}>{name}</p>
      <p className={ProjectNameClass ?? `${styles.data__ProjectName}`}>{ProjectName}</p>
      <p className={valueClass ?? `${styles.data__value}`}>{value}</p>
    </div>
  );
};

export interface INamedValue {
  name: string;
  ProjectName: string;
  value: string;
  error?: boolean;
  className?: string;
  nameClass?: string;
  ProjectNameClass?: string;
  valueClass?: string;
}

export function convertDataToNamedValues(data: Record<string, string>) {
  // const names = Object.getOwnPropertyNames(data);
  const names = Object.keys(data);

  const result = names.map((n, i) => (
    <NamedValue key={i} name={n} ProjectName={n} value={data[n]} />
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
      ProjectName: n,
      value: data[n].toString() 
    }));
  
    return result;  
  } catch (error) {
    return [{
      name: null,
      ProjectName: null,
      value: null,
      error: true
    }]
  }
}
