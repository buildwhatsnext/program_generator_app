import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Doughnut } from 'react-chartjs-2';
import styles from './display.pie.module.scss';
import { SPACE_STANDARDS } from '../../constants/ark.standards';
import PROGRAMS from '../../constants/ark.programs';
import { selectOverview } from '../../features/info/info.slice';
import { updateAreaOnHold } from '../../lib/updaters';
import { selectProgram } from '../../features/space/space.slice';
import { ProgramState } from '../spaces/Program';

function composeAreaData(state: ProgramState) {
  const spatialMap = [];

  const {
    // totalAreaBuilding,
    totalAreaUnprogrammed,
    totalAreaHold,
    totalAreaEnclosed,
    totalAreaOpen,
    totalAreaMeeting,
    totalAreaAmenity,
    totalAreaSupport,
    totalAreaBroadcast,
    totalAreaLab,
  } = state;

  const spatialDataArray = [
    totalAreaUnprogrammed,
    totalAreaHold,
    totalAreaEnclosed,
    totalAreaOpen,
    totalAreaMeeting,
    totalAreaAmenity,
    totalAreaSupport,
    totalAreaBroadcast,
    totalAreaLab,
  ]
  
  Object.keys(PROGRAMS).forEach((key, i) => {
    // console.log(`Here's the map at the start: `, spatialMap);
    // console.log(`Adding element to index: ${i}`);
    // console.log(`${i} - ${key} - `, SPACE_STANDARDS[key]);
    const data = SPACE_STANDARDS[key];
    // console.log(`Now let's add`, data);
    const area = spatialDataArray[i];
    spatialMap.push(data);
    spatialMap[i].area = area;
    // console.log(`Here's the map at the end: `, spatialMap)
  })

  return spatialMap;
}

export const ProgrammedSpaceDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const overview = useSelector(selectOverview);
  const program = useSelector(selectProgram);
  const { hasLab, hasBroadcast } = overview;
  const standards = { ...SPACE_STANDARDS};
  if(!hasLab)
    delete standards.LAB;

  if(!hasBroadcast)
    delete standards.BROADCAST;

  const data = composeAreaData(program);
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
    dispatch(updateAreaOnHold());
    console.log('Done!');
  });

  const handleClick = (pie) => {
    const element = pie[0];
    if(!element)
      return;
    
    const { _model } = element;
    const standard = SPACE_STANDARDS;
    const programType = _model.label;
    router.push(standard[programType.toUpperCase()].route);
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
