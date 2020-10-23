import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2';
import styles from './display.pie.module.scss';
import { SPACE_STANDARDS } from '../../constants/ark.standards';
import { calculateUnplanned, selectProgram } from '../../features/program/program.slice';

export const ProgrammedSpaceDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const { overview } = useSelector(selectProgram)
  const { area } = overview;
  const { hasLab, hasBroadcast } = overview.general;
  const standards = SPACE_STANDARDS;
  if(!hasLab)
    delete standards.LAB;

  if(!hasBroadcast)
    delete standards.BROADCAST;

  const areaData = Object.values(area);
  const data = areaData.slice(1, areaData.length - 1); // removes total
  const labels = Object.values(standards).map(space => space.name);
  const colors = Object.values(standards).map(space => space.color);
  const borders = Object.values(standards).map(space => space.border);

  const datasets = [{
    data,
    backgroundColor: colors,
    borderColor: borders
  }];

  const options = {
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
