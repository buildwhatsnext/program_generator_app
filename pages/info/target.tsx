import React from 'react';
import { useSelector } from 'react-redux';
import { selectOverview } from '../../features/info/info.slice';
import TargetMetric from '../../features/info/general.target';

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
  
  return <TargetMetric hasPrevState={hasPrevState} />;
}
