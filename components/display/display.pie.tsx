import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import styles from './display.pie.module.scss';

export function ProgrammedSpaceDisplay() {
  const labels = [
    '18 - 34',
    '34 - 51',
    '52 - 75',
    '75+',
  ]

  const dataSets = [{
    data: [2000, 4000, 2850, 150],
    backgroundColor: ['red', 'blue', 'green', 'orange']
  }];

  const options = {
    segmentShowStroke: true,
    segmentStrokeColor: '#fff',
    segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
  }

  return (
    <div className={styles.pie}>
      <Doughnut
        data={
          {labels: labels,
          datasets: dataSets}
        }
        options={options}
        height={100}
      />
    </div>
  )
}
