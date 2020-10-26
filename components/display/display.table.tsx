/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { ISpace, SpaceType } from '../spaces/space.type';
import styles from './display.table.module.scss';

interface ISpaceColumn {
  id: string,
  label: string,
  minWidth?: number,
  align?: 'left' | 'center' | 'right',
  format?: (value: number) => string
}

function convertEnumToString(value: SpaceType) {
  const name = SpaceType[value];

  return name;
}

const columns: ISpaceColumn[] = [
  { 
    id: 'name', 
    label: 'Name', 
    minWidth: 14
  },
  { 
    id: 'seats', 
    label: 'Seats', 
    minWidth: 2 
  },
  {
    id: 'ratio',
    label: 'Ratio',
    minWidth: 2,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'area',
    label: 'Area',
    minWidth: 2,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'qty_selected',
    label: 'Quantity Selected',
    minWidth: 2,
    format: (value: number) => value.toFixed(2),
  },
  { 
    id: 'seats_total', 
    label: 'Total Seats', 
    minWidth: 2 
  },
  { 
    id: 'area_total', 
    label: 'Total Area', 
    minWidth: 2 
  },
];

export default function SpaceTable() {
  const start = [{}];
  const [rowData, setRowData] = React.useState(start);

  const addRow = () => {
    const newRowData = Array.from(rowData);
    newRowData.push({});
    setRowData(newRowData);
  }

  // const removeRow = () => {
  //   rowData.
  // }

  return (
    <>
      <Button variant='text' onClick={() => addRow()}>Add New</Button>
      {/* <Paper> */}
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <SpaceTableHeader columns={columns} />
            <SpaceTableData columns={columns} rows={rowData} />
          </Table>
        </TableContainer>
      {/* </Paper> */}
    </>
  );
}

export function SpaceTableHeader({columns}) {
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

export function SpaceTableData({ columns, rows } /* : ISpaceTableData */) {
  console.log(rows);

  useEffect(() => {
    console.log(`There are now ${rows.length} rows of data`);
  })

  return (
    <TableBody>
      {
        rows.map((row,i) => {
          console.log(i);
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={i}>
              {
                columns.map((column) => {
                  return (
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

// interface ISpaceTableData {
//   columns: ISpaceColumn[],
//   rows: ISpace[]
// }
