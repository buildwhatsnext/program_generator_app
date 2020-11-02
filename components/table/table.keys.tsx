import React from 'react';
import styles from './table.module.scss';

interface IDeletableElement {
  elementIndex: unknown;
  handler: (x: unknown) => void;
}

export const DeleteKey = ({elementIndex, handler}: IDeletableElement) => (
  <p 
    className={styles.deleteKey}
    onClick={() => handler(elementIndex)}
  >
    x
  </p>
)