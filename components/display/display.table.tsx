import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { ISpace, SpaceType } from '../../components/spaces/space.type';

interface ISpaceColumn {
  id: string,
  // type: SpaceType,
  label: string,
  minWidth?: number,
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
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'area',
    label: 'Area',
    minWidth: 100,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'qty_selected',
    label: 'Quantity Selected',
    minWidth: 100,
    // align: 'right',
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

export default function StickyHeadTable() {
  let start = new Array(2);
  const [rowData, setRowData] = React.useState(start);

  return (
    <Paper /* className={classes.root} */>
      <TableContainer /*className={classes.container} */>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
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
          <TableBody>
            {
              rowData.map( (r,i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i++}>
                    {columns.map((column) => {
                      // const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <TextField id="standard-basic" />
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
