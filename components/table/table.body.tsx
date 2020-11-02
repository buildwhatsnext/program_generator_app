import React, { useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import { SpaceColumns } from './table.column';
import { ISpace } from '../spaces/Space';
import { DeleteKey } from './table.keys';
import { SpaceCell } from './table.cell';


export interface ISpaceTableData {
  // columns: ISpaceColumn[];
  rows?: ISpace[];
  deleteHandler?: (x?: unknown) => void;
  dataHandler?: (idCol, idRow, data) => void;
}

export function SpaceTableBody({ rows, dataHandler, deleteHandler } : ISpaceTableData) {
  const columns = SpaceColumns;

  useEffect(() => {
    // console.log(`There are now ${rows.length} rows of data`);
  })

  return (
    <TableBody>
      {
        rows.map((row, rowIndex) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={rows[rowIndex].id}>
              {
                columns.map((column ,columnIndex) => {
                  const stored = row[column.id];

                  return (
                    column.id === 'delete' 
                    ? <DeleteKey elementIndex={rowIndex} handler={deleteHandler}  />
                    : <SpaceCell 
                        id={`${column.id}-${rowIndex}`} 
                        align={column.align} 
                        minWidth={column.minWidth}
                        rowId={rowIndex.toString()} 
                        columnId={columnIndex.toString()}
                        dataHandler={dataHandler}
                        cellState={stored}
                      />
                  );
                }
              )}
            </TableRow>
          );
        })
      }
  </TableBody>
  )
}


