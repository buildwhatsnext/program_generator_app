import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { ISpace, SpaceType } from '../../components/spaces/space.type';
import { isConstructorDeclaration } from 'typescript';

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
    minWidth: 170 
  },
  { 
    id: 'seats', 
    label: 'Seats', 
    minWidth: 100 
  },
  {
    id: 'ratio',
    label: 'Ratio',
    minWidth: 100,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'area',
    label: 'Area',
    minWidth: 100,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'qty_selected',
    label: 'Quantity Selected',
    minWidth: 100,
    format: (value: number) => value.toFixed(2),
  },
  { 
    id: 'seats_total', 
    label: 'Total Seats', 
    minWidth: 100 
  },
  { 
    id: 'area_total', 
    label: 'Total Area', 
    minWidth: 100 
  },
];

export default function SpaceTable() {
  const empty = {};
  const start = [empty];
  const [rowData, setRowData] = React.useState(start);

  const addRow = () => {
    rowData.push(empty);
    setRowData(rowData);
    console.log(rowData);
  }

  let rowDisplay =  <SpaceTableData columns={columns} rows={rowData} />
  
  useEffect(() => {
    console.log(`There are ${rowData.length} rows of data`);
    rowDisplay = <SpaceTableData columns={columns} rows={rowData} />
  })

  return (
    <>
      <Button variant='text' onClick={() => addRow()}>Add New</Button>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <SpaceTableHeader columns={columns} />
            { rowDisplay }
          </Table>
        </TableContainer>
      </Paper>
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
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export function SpaceTableData({ columns, rows } /* : ISpaceTableData */) {
  console.log(rows);

  return (
    <TableBody>
      {
        rows.map((row,i) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={i}>
              {
                columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      <TextField />
                      {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
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
