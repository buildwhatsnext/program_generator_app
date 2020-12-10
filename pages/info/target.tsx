import React from 'react';
import { useSelector } from 'react-redux';
import { selectOverview } from '../../client/features/project/project.slice';
import TargetMetric from '../../client/features/project/project.target';

export default function TargetMetricPage() {
  const { 
    targetFactorCirculation, 
    targetFactorLoss, 
    targetAreaPerWorkseat, 
    targetNumOfWorkseats 
  } = useSelector(selectOverview);

  const state = [ 
    targetFactorCirculation, 
    targetFactorLoss, 
    targetAreaPerWorkseat, 
    targetNumOfWorkseats 
  ];

  const hasPrevState = state.some(val => val !== null);
  
  return <TargetMetric hasPrevState={hasPrevState} prevState={{...state}} />;
}
