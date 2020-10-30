import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import { SpaceTableHeader} from './table.header';
import { SpaceTableBody } from './table.body';
import { Space, SpaceFactory } from '../spaces/Space';

interface IGenericTable<T extends Space> {
  type: new () => T;
  tableDataHandler: (data: T[]) => void;
}

export default function SpaceTable<T extends Space>({type, tableDataHandler}: IGenericTable<T> ) {
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

  const getColumnNameByIndex = (index: number) => {
    return Object.keys(rowData[0])[index];
  }

  const getCellByIndices = (rowIndex: number, columnIndex: number) => {
    const row = rowData[rowIndex];
    const columnName = getColumnNameByIndex(columnIndex);
    const cell = rowData[rowIndex][columnName];

    return cell;
  }

  const addDataToElement = (idRow: number, idColumn: number, data: string) => {
    // console.log('Data received from :', idRow, idColumn, data);
    const columnName = getColumnNameByIndex(idColumn);
    const newRowData = Array.from(rowData);
    newRowData[idRow][columnName] = data;
    setRowData(newRowData);
  }

  useEffect(() => {
    console.log('The table data updated');
    tableDataHandler(rowData);
  })

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
