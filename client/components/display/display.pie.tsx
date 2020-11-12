/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Doughnut } from 'react-chartjs-2';
import styles from './display.pie.module.scss';
import { SPACE_STANDARDS } from '../../../shared/constants/ark.standards';
import PROGRAMS from '../../../shared/constants/ark.programs';
import { selectOverview } from '../../features/project/project.slice';
import { updateAreaOnHold } from '../../../shared/lib/updaters';
import { selectProgram } from '../../features/space/space.slice';
import { ProgramState } from '../../../shared/types/Program';
import { calculateCollaborationRatio, calculateTotalProgrammedArea, calculateTotalWorkseats, calculateWorkseatRatio } from '../../middleware/middleware.space';

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

  return final;
}

export interface PieProps {

  backgroundColor?: string;
}

export const ProgrammedSpaceDisplay: React.FC<PieProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor,
  ...props
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const overview = useSelector(selectOverview);
  const program = useSelector(selectProgram);
  const { hasLab, hasBroadcast } = overview;
  const standards = { ...SPACE_STANDARDS};
  if(!hasLab)
    delete standards.LAB;

  if (!hasBroadcast)
    delete standards.BROADCAST;

  const areaData = composeAreaData(program);
  const data = Object.values(areaData).map(space => space.area);
  const labels = Object.values(areaData).map(space => space.name);
  const colors = Object.values(areaData).map(space => space.color);
  const borders = Object.values(areaData).map(space => space.border);

  const datasets = [{
    data,
    backgroundColor: colors,
    borderColor: borders,
    extraData: ['someData', 'someData', 'someData', 'someData']
  }];

  const options = {
    segmentStrokeWidth: 10,
    percentageInnerCutout: 50,
  }

  useEffect(() => {
    console.log('Calculating...');
    dispatch(updateAreaOnHold());
    dispatch(calculateTotalProgrammedArea());
    dispatch(calculateTotalWorkseats());
    dispatch(calculateWorkseatRatio());
    dispatch(calculateCollaborationRatio());
    console.log('Done!');
  });

  const handleClick = (pie) => {
    const element = pie[0];
    if(!element)
      return;

    const { _model } = element;
    const standard = SPACE_STANDARDS;
    const programType = _model.label;
    const programKeys = Object.keys(PROGRAMS)
    const programVals = Object.values(PROGRAMS);
    const routeName = programKeys[programVals.indexOf(programType)]
    const { route } = standard[routeName];
    // console.log(route);
    router.push(route);
    // router.push(standard[programType.toUpperCase()].route);
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
