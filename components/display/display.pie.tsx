import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2';
import styles from './display.pie.module.scss';
import { SPACE_STANDARDS } from '../../constants/ark.standards';
// import { selectProject } from '../../features/project/project.slice';
import { calculateUnplanned, selectProgram } from '../../features/program/program.slice';

export const ProgrammedSpaceDisplay: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const { overview } = useSelector(selectProgram)
  const { area } = overview;
  const areaData = Object.values(area);
  const data = areaData.slice(1, areaData.length - 1);
  const labels = Object.values(SPACE_STANDARDS).map(space => space.name);
  const colors = Object.values(SPACE_STANDARDS).map(space => space.color);
  const borders = Object.values(SPACE_STANDARDS).map(space => space.border);

  const datasets = [{
    data,
    backgroundColor: colors,
    borderColor: borders
  }];

  const options = {
    // segmentShowStroke: true,
    // segmentStrokeColor: '#000000',
    segmentStrokeWidth: 10,
    percentageInnerCutout: 50,
  }

  useEffect(() => {
    console.log('Calculating...');
    dispatch(calculateUnplanned());
    console.log('Done!');
  });

  return (
    <div className={styles.pie}>
      <Doughnut
        data={{
          labels,
          datasets
        }}
        options={options}
        height={100}
      />
    </div>
  )
}
