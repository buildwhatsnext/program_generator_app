import React from 'react';
import { Pie } from 'react-chartjs-2';

export function ProgrammedSpaceDisplay() {
  const labels = [
    '18 - 34',
    '34 - 51',
    '52+',
  ]

  const dataSets = [{
    data: [2000, 4000, 2850],
    backgroundColor: ['red', 'blue', 'green']
  }];

  return (
    <div className="pie">
      <Pie
        data={
          {labels: labels,
          datasets: dataSets}
        }
      />
    </div>
  )
}
