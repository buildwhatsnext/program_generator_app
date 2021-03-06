import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import { SpaceTableHeader} from './table.header';
import { SpaceTableBody, ReadonlyBody } from './table.body';
import { Space } from '../../../shared/types/Space';
import { tryConvertToNumber } from '../../../shared/lib/conversion';
import SpaceFactory from '../../../shared/types/SpaceFactory';
import { SpaceColumns } from './table.column';

interface IGenericTable<T extends Space> {
  type: new () => T;
  tableDataHandler: (data: T[]) => void;
  prevData?: T[];
  readonly?: boolean;
}

export default function SpaceTable<T extends Space>({type, tableDataHandler, prevData, readonly}: IGenericTable<T> ) {
  const initialSpace = SpaceFactory.create(type);
  const initialData = 
    (prevData === null || prevData.length < 1) 
      ? [initialSpace] 
      : prevData;
  
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
    tableDataHandler(rowData);
  })

  const addNew = !readonly 
                  ? <Button variant='text' onClick={() => addRow()}>Add New</Button>
                  : null;

  const columns = !readonly ? SpaceColumns : SpaceColumns.slice(1, SpaceColumns.length);

  return (
    <>
        { addNew }
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <SpaceTableHeader columns={columns}/>
            {
              readonly 
              ? (
                <ReadonlyBody 
                  rows={rowData} 
                  columns={columns}
                />
              ) : (
                <SpaceTableBody 
                  rows={rowData} 
                  columns={columns}
                  deleteHandler={removeRow} 
                  dataHandler={addDataToElement}
                />
              )
            }
          </Table>
        </TableContainer>
    </>
  );
}
