import React from 'react';
import { Guid } from 'guid-typescript';
import { Button } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import { SpaceTableHeader } from './table.header';
import { SpaceTableBody } from './table.body';

export default function SpaceTable() {
  const initialId = Guid.create().toString();
  const initialRow = [{id: initialId}]
  const [rowData, setRowData] = React.useState(initialRow);

  const addRow = () => {
    const newRowData = Array.from(rowData);
    const newIndex = Guid.create().toString();
    
    newRowData.push({id:newIndex});
    
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
            <SpaceTableBody columns={columns} rows={rowData} handler={removeRow} />
          </Table>
        </TableContainer>
      {/* </Paper> */}
    </>
  );
}
