import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import styles from './display.pie.module.scss';
import { SPACE_STANDARDS } from '../../constants/ark.standards';

export function ProgrammedSpaceDisplay() {
  const labels = Object.values(SPACE_STANDARDS).map(space => space.label);
  const colors = Object.values(SPACE_STANDARDS).map(space => space.color);

  const dataSets = [{
    data: [2000, 4000, 2850, 150],
    backgroundColor: colors
  }];

  const options = {
    segmentShowStroke: true,
    segmentStrokeColor: '#000000',
    segmentStrokeWidth: 10,
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
