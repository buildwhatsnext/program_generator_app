/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';
import styles from './table.module.scss';

export function SpaceTableBody({ columns, rows, handler } /* : ISpaceTableData */) {
  console.log(rows);

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
                    ? (
                      <p 
                        className={styles.deleteKey}
                        onClick={() => handler(i)}
                      >
                        x
                      </p>
                    )
                    : (
                      <TableCell 
                        key={column.id} 
                        align={column.align} 
                        style={{ 
                          minWidth: `${column.minWidth}rem`,
                        }}
                        className={styles.tableCell__override}
                      >
                        <TextField />
                      </TableCell>
                    )
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
