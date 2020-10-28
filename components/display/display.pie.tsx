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

function composeAreaData(state: ProgramState): {
  area: number,  
  name: string;
  color: string;
  border?: string;
  route: string;
}[] {
  const spatialMap: {
    area: number,  
    name: string;
    color: string;
    border?: string;
    route: string;
  }[]  = [];

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
    const data = SPACE_STANDARDS[key];
    const area = spatialDataArray[i];
    spatialMap.push({
      area,
      name: data.name,
      color: data.color,
      border: data.border,
      route: data.route
    });
  })

  let final = []

  final = spatialMap.filter((slice) => slice.area > 0);
  // final = spatialMap.map((slice) => {
  //   if(slice.area > 0)
  //     console.log(slice);
  //   return slice;
  // })

  return final;
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

  const areaData = composeAreaData(program);
  const data = Object.values(areaData).map(space => space.area);
  const labels = Object.values(areaData).map(space => space.name);
  const colors = Object.values(areaData).map(space => space.color);
  const borders = Object.values(areaData).map(space => space.border);

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
