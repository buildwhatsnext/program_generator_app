import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { DeleteKey } from './table.keys';
import { DataEntryCell } from './table.cell';
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
      columns.map((column ,columnIndex) => {
        const stored = data[column.id];

        return (
          column.id === 'delete' 
          ? <DeleteKey elementIndex={index} handler={deleteHandler}  />
          : <DataEntryCell 
              id={`${column.id}-${index}`} 
              align={column.align} 
              minWidth={column.minWidth}
              rowId={index.toString()} 
              columnId={columnIndex.toString()}
              dataHandler={dataHandler}
              cellState={stored}
            />
          );
        }
      )}
    </TableRow>
  )
}