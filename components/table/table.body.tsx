/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';
import styles from './table.module.scss';
import { ISpaceColumn, SpaceColumns } from './table.column';
import { ISpace, Space, SpaceType } from '../spaces/Space';
import { DeleteKey } from './table.keys';
import { SpaceCell } from './table.cell';


export interface ISpaceTableData {
  // columns: ISpaceColumn[];
  rows?: ISpace[];
  handler?: (x?: unknown) => void;
}

export function SpaceTableBody({ rows, handler } : ISpaceTableData) {
  const columns = SpaceColumns;

  useEffect(() => {
    console.log(`There are now ${rows.length} rows of data`);
  })

  return (
    <TableBody>
      {
        rows.map((row,i) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={rows[i].id}>
              {
                columns.map((column) => {
                  return (
                    column.id === 'delete' 
                    ? <DeleteKey elementIndex={i} handler={handler}  />
                    : <SpaceCell 
                        id={column.id} 
                        align={column.align} 
                        minWidth={column.minWidth} 
                        // handler={}
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


