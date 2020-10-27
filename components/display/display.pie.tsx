import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Doughnut } from 'react-chartjs-2';
import styles from './display.pie.module.scss';
import { SPACE_STANDARDS } from '../../constants/ark.standards';
import { selectInfo } from '../../features/info/info.slice';
// import { ROUTES } from '../../constants/routes';
// import AppNavigation from '../Navigator';

export const ProgrammedSpaceDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const overview = useSelector(selectInfo)
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
    // dispatch(calculateUnplanned());
    console.log('Done!');
  });

  const handleClick = (data) => {
    const element = data[0];
    if(!element)
      return;
    
    const { _model } = element;
    const standard = SPACE_STANDARDS;
    const program = _model.label;
    router.push(standard[program.toUpperCase()].route);
  }

  return (
    <div className={styles.pie}>
      <Doughnut
        data={{
          labels,
          datasets
        }}
        options={options}
        height={100}
        onElementsClick={handleClick}
      />
    </div>
  )
}
