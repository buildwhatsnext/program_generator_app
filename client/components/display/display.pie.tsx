/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Doughnut } from 'react-chartjs-2';
import styles from './display.pie.module.scss';
import { SPACE_STANDARDS } from '../../../shared/constants/ark.standards';
import PROGRAMS from '../../../shared/constants/ark.programs';
import { selectOverview } from '../../features/project/project.slice';
import { selectProgram } from '../../features/space/space.slice';
import { createSpatialDataSet, createSpatialMap } from './display.map';

export interface PieProps {
  backgroundColor?: string;
}

export const ProgrammedSpaceDisplay: React.FC<PieProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor,
  ...props
}) => {
  const router = useRouter();
  const overview = useSelector(selectOverview);
  const program = useSelector(selectProgram);
  const areaData = createSpatialMap(program, overview, {...SPACE_STANDARDS});
  const dataset = createSpatialDataSet(areaData);

  const options = {
    segmentStrokeWidth: 10,
    percentageInnerCutout: 50,
  }

  const handleClick = (pie) => {
    console.log(pie);

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

    if(routeName === 'UNPLANNED') {
      return;
    };
    
    router.push(route);
  }

  return (
    <div className={styles.pie}>
      <Doughnut
        data={{
          labels: dataset.labels,
          datasets: dataset.data
        }}
        options={options}
        height={100}
        onElementsClick={handleClick}
      />
    </div>
  )
}

export const RatioSpaceDisplay = () => {
  const router = useRouter();
  const overview = useSelector(selectOverview);
  const program = useSelector(selectProgram);
  const areaData = createSpatialMap(program, overview, {...SPACE_STANDARDS}, true);
  const dataset = createSpatialDataSet(areaData);

  const options = {
    segmentStrokeWidth: 10,
    percentageInnerCutout: 50,
  }

  const handleClick = (pie) => {
    console.log(pie);

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

    if(routeName === 'UNPLANNED') {
      return;
    };
    
    router.push(route);
  }

  return (
    <div className={styles.pie}>
      <Doughnut
        data={{
          labels: dataset.labels,
          datasets: dataset.data
        }}
        options={options}
        height={100}
        onElementsClick={handleClick}
      />
    </div>
  )
}
