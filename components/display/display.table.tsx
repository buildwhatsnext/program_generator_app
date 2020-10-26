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
    id: 'delete', 
    label: '', 
    minWidth: 1
  },
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
  const [index, setIndex] = React.useState(0);
  const start = [{index}];
  const [rowData, setRowData] = React.useState(start);

  const addRow = () => {
    const newRowData = Array.from(rowData);
    const newIndex = index + 1;
    
    newRowData.push({index:newIndex});
    
    setIndex(newIndex);
    setRowData(newRowData);
  }

  const removeRow = (index) => {
    const newRowData = Array.from(rowData);
    console.log(`I want to delete ${index}`);
    newRowData.splice(index, 1);
    console.log('This is what the data looks like: ', newRowData);
    setRowData(newRowData);
  }

  return (
    <>
      <Button variant='text' onClick={() => addRow()}>Add New</Button>
      {/* <Paper> */}
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <SpaceTableHeader columns={columns} />
            <SpaceTableData columns={columns} rows={rowData} handler={removeRow} />
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

export function SpaceTableData({ columns, rows, handler } /* : ISpaceTableData */) {
  console.log(rows);

  useEffect(() => {
    console.log(`There are now ${rows.length} rows of data`);
  })

  return (
    <TableBody>
      {
        rows.map((row,i) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={i}>
              {
                columns.map((column) => {
                  return (
                    column.id === 'delete' 
                    ? (
                      <p 
                        className={styles.deleteKey}
                        onClick={() => handler(i)}
                        // onClick={() => handler(`${i} ${row}`)}
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

// interface ISpaceTableData {
//   columns: ISpaceColumn[],
//   rows: ISpace[]
// }
