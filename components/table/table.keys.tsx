/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './table.module.scss';

interface DeleteProps {
  elementIndex: unknown;
  handler: (x: unknown) => void;
}

export const DeleteKey = ({elementIndex, handler}: DeleteProps) => (
  <p 
    className={styles.deleteKey}
    onClick={() => handler(elementIndex)}
  >
    x
  </p>
)