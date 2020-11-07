import React, { useRef } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { TextualAnswer } from '../info/answer';
import { ISpace } from '../../../shared/types/ISpace';
import { ISpaceColumn } from './table.column';
import renderCellByColumnType from './table.function';

import styles from './table.module.scss';
import { ReadonlyTextBox } from '../info/input';

export interface CellProps {
  id: string;
  align: "left" | "center" | "right" | "justify" | "inherit";
  minWidth: number;
  dataHandler?: (rowId, colId, data) => void;
  rowId: string;
  columnId: string;
  cellState: string;
}

export interface ISpaceCell {
  row: ISpace;
  rowIndex: number;
  column: ISpaceColumn;
  columnIndex: number;
  storedData: string;
  deleteHandler?: (x?: unknown) => void;
  dataHandler?: (idCol, idRow, data) => void;
}

export const SpaceCell = (props: ISpaceCell) => {
  const cell = renderCellByColumnType(props);

  return cell;
}

export const DataEntryCell = ({id, align, minWidth, dataHandler, rowId, columnId, cellState}: CellProps) => {
  const valueRef = useRef<HTMLInputElement>(null);

  const handleData = () => {
    dataHandler(rowId, columnId, valueRef.current.value);
  }

  return (
    <TableCell 
      key={id}
      align={align} 
      style={{ 
        minWidth: `${minWidth}rem`,
      }}
      className={styles.tableCell__override}
    >
      <TextualAnswer answerHandler={handleData} passedRef={valueRef} storedValue={cellState}/>
    </TableCell>
  )
}

export const ReadonlyCell = ({id, align, minWidth, dataHandler, rowId, columnId, cellState}: CellProps) => {
  const valueRef = useRef<HTMLInputElement>(null);

  const handleData = () => {
    // dataHandler(rowId, columnId, valueRef.current.value);
  }

  return (
    <TableCell 
      key={id}
      align={align} 
      style={{ 
        minWidth: `${minWidth}rem`,
      }}
      className={styles.tableCell__override}
    >
      <ReadonlyTextBox storedValue={cellState} handler={handleData} />
      {/* <TextualAnswer answerHandler={handleData} passedRef={valueRef} storedValue={cellState}/> */}
    </TableCell>
  )
}