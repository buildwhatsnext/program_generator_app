import React, { useEffect } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { ReadonlyCell, SpaceCell } from './table.cell';
import { ISpaceColumn } from './table.column';
import { ISpace } from '../../../shared/types/ISpace';

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
  
  const calculateTotalArea = (row: ISpace) => {
    const { area, quantitySelected } = row;
    const totalArea = area * quantitySelected;
    return totalArea;
  }

  const calculateTotalSeats = (row: ISpace) => {
    const { seats, quantitySelected } = row;
    const totalArea = seats * quantitySelected;
    return totalArea;
  }

  const handleCalculations = () => {
    const totalArea = calculateTotalArea(data);
    const totalSeats = calculateTotalSeats(data);
    data.areaTotal = totalArea;
    data.seatTotal = totalSeats;
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