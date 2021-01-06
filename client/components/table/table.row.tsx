import React, { useEffect } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { ReadonlyCell, SpaceCell } from './table.cell';
import { ISpaceColumn } from './table.column';
import { ISpace, ISpaceTransitObject } from '../../../shared/types/ISpace';
import { formatNumberInput, removeCommas } from '../../../shared/lib/conversion';
import { calculateTotalArea, calculateTotalSeats } from '../../../shared/lib/calculators';

interface IDataEntryRow {
  index: number;
  data: ISpace;
  columns: ISpaceColumn[];
  deleteHandler?: (x?: unknown) => void;
  dataHandler?: (idCol, idRow, data) => void;
}

export function ReadonlyRow(props: IDataEntryRow) {
  const { data, columns, index } = props;

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={data.id}>
      {
        columns.map((column, columnIndex) => {
          const stored = data[column.id];

          return (
            <SpaceCell 
              row={data}
              rowIndex={index}
              column={column}
              columnIndex={columnIndex}
              storedData={stored}
              allReadonly
            />
          );
        })
      }
    </TableRow>
  )
}

export function DataEntryRow(props: IDataEntryRow) {
  const {data, columns, index, deleteHandler, dataHandler} = props;

  const handleCalculations = () => {
    const casted = (data as unknown) as ISpaceTransitObject;

    const totalArea = calculateTotalArea(casted);
    const totalSeats = calculateTotalSeats(casted);

    const areaFmtd = formatNumberInput(totalArea);
    const seatsFmtd = formatNumberInput(totalSeats);

    data.areaTotal = areaFmtd;
    data.seatTotal = seatsFmtd;
  }

  useEffect(() => {
    handleCalculations()
  }, [props])
  
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={data.id}>
      {
        columns.map((column, columnIndex) => {
          const stored = data[column.id];

          return (
            <SpaceCell 
              row={data}
              rowIndex={index}
              column={column}
              columnIndex={columnIndex}
              storedData={stored}
              deleteHandler={deleteHandler}
              dataHandler={dataHandler}
            />
          );
        })
      }
    </TableRow>
  )
}