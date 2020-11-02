import React, { useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import { DataEntryRow } from './table.row';
import { SpaceColumns } from './table.column';
import { ISpace } from '../spaces/Space';



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
            <DataEntryRow 
              index={rowIndex} 
              data={row} 
              columns={columns}
              dataHandler={dataHandler}
              deleteHandler={deleteHandler}
            />
          )
        })
      }
    </TableBody>
  )
}


