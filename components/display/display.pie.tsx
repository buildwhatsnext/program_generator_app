import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2';
import styles from './display.pie.module.scss';
import { SPACE_STANDARDS } from '../../constants/ark.standards';
import { selectProject } from '../../features/project/project.slice';

export function ProgrammedSpaceDisplay() {
  const data = useSelector(selectProject)
  const labels = Object.values(SPACE_STANDARDS).map(space => space.name);
  const colors = Object.values(SPACE_STANDARDS).map(space => space.color);
  const borders = Object.values(SPACE_STANDARDS).map(space => space.border);

  const dataSets = [{
    data: [2000, 4000, 2850, 150],
    backgroundColor: colors,
    borderColor: borders
  }];

  const options = {
    // segmentShowStroke: true,
    // segmentStrokeColor: '#000000',
    // segmentStrokeWidth: 10,
    percentageInnerCutout: 50,
  }

  return (
    <div className={styles.pie}>
      <Doughnut
        data={{
          labels: labels,
          datasets: dataSets
        }}
        options={options}
        height={100}
      />
    </div>
  )
}
