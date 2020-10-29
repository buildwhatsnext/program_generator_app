import React from 'react';
import { Guid } from 'guid-typescript';
import { Button } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import { SpaceTableHeader, IHeaderData } from './table.header';
import { ISpaceTableData, SpaceTableBody } from './table.body';
import { ISpace, Space, SpaceFactory } from '../spaces/Space';
import { ISpaceColumn } from './table.column';

interface IGenericTable<T extends Space> {
  type: new () => T
}

export default function SpaceTable<T extends Space>({type}: IGenericTable<T> ) {
  const initialSpace = SpaceFactory.create(type);
  const initialData = [initialSpace];
  const [rowData, setRowData] = React.useState(initialData);

  const addRow = () => {
    const newRowData = Array.from(rowData);
    const newSpace = SpaceFactory.create(type);
    newRowData.push(newSpace);
    setRowData(newRowData);
  }

  const removeRow = (index) => {
    const newRowData = Array.from(rowData);
    console.log(`I want to delete ${index}`);
    newRowData.splice(index, 1);
    console.log('This is what the data looks like: ', newRowData);
    setRowData(newRowData);
  }

  const addDataToElement = (idRow: number, idColumn: number, data: string) => {
    console.log('Data received from :', idRow, idColumn, data);
    const newRowData = Array.from(rowData);
    newRowData[idRow][idColumn - 1] = data;
    setRowData(newRowData);
  }

  return (
    <>
      <Button variant='text' onClick={() => addRow()}>Add New</Button>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <SpaceTableHeader />
            <SpaceTableBody 
              rows={rowData} 
              deleteHandler={removeRow} 
              dataHandler={addDataToElement}
            />
          </Table>
        </TableContainer>
    </>
  );
}
