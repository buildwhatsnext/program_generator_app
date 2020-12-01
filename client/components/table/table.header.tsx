import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ISpaceColumn, SpaceColumns } from './table.column';
import styles from './table.module.scss';

export interface IHeaderData {
  columns: ISpaceColumn[]
}

export function SpaceTableHeader({columns}: IHeaderData) {
  // const columns = SpaceColumns;

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