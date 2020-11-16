import React, { useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import { DataEntryRow, ReadonlyRow } from './table.row';
import { SpaceColumns } from './table.column';
import { ISpace } from '../../../shared/types/ISpace';

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

export function ReadonlyBody({ rows } : ISpaceTableData) {
  const columns = SpaceColumns;

  return (
    <TableBody>
      {
        rows.map((row, rowIndex) => {
          return (
            <ReadonlyRow 
              index={rowIndex} 
              data={row} 
              columns={columns}
            />
          )
        })
      }
    </TableBody>
  )
}
