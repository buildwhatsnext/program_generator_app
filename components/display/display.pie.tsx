import React from 'react';
import { Pie } from 'react-chartjs-2';
import styles from './display.pie.module.scss';

export function ProgrammedSpaceDisplay() {
  const labels = [
    '18 - 34',
    '34 - 51',
    '52+',
  ]

  const dataSets = [{
    data: [2000, 4000, 2850],
    backgroundColor: ['red', 'blue', 'green']
  }];

  return (
    <div className={styles.pie}>
      <Pie
        data={
          {labels: labels,
          datasets: dataSets}
        }
      />
    </div>
  )
}
