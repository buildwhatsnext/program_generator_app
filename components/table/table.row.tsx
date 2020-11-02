import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { DeleteKey } from './table.keys';
import { DataEntryCell, SpaceCell } from './table.cell';
import { ISpace } from '../spaces/Space';
import { ISpaceColumn } from './table.column';

interface IDataEntryRow {
  index: number;
  data: ISpace;
  columns: ISpaceColumn[];
  deleteHandler?: (x?: unknown) => void;
  dataHandler?: (idCol, idRow, data) => void;
}

export function DataEntryRow({data, columns, index, deleteHandler, dataHandler}: IDataEntryRow) {
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