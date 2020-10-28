import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ISpaceColumn } from './table.column';

export function SpaceTableHeader(columns: ISpaceColumn[]) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column: ISpaceColumn) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ 
              minWidth: `${column.minWidth}rem`,
            }}
            className={styles.tableCell__override}
          >
            <p>
              {column.label}
            </p>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}