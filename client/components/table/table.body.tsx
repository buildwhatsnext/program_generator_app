import React, { useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import { DataEntryRow, ReadonlyRow } from './table.row';
import { ISpaceColumn, SpaceColumns } from './table.column';
import { ISpace } from '../../../shared/types/ISpace';

export interface ISpaceTableData {
  // columns: ISpaceColumn[];
  rows?: ISpace[];
  columns: ISpaceColumn[];
  deleteHandler?: (x?: unknown) => void;
  dataHandler?: (idCol, idRow, data) => void;
}

export function SpaceTableBody({ rows, dataHandler, deleteHandler, columns } : ISpaceTableData) {

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

export function ReadonlyBody({ rows, columns } : ISpaceTableData) {
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
