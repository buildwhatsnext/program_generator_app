import React, { useRef } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { NumericalAnswer, TextualAnswer } from '../info/answer';
import { ISpace, ISpaceDisplayObject } from '../../../shared/types/ISpace';
import { ISpaceColumn } from './table.column';
import renderCellByColumnType, { renderReadOnlyCells } from './table.function';

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

export interface NumberCellProps extends CellProps{
  limit?: string | number;
}

export interface ISpaceCell {
  row: Partial<ISpaceDisplayObject>;
  rowIndex: number;
  column: ISpaceColumn;
  columnIndex: number;
  storedData: string;
  deleteHandler?: (x?: unknown) => void;
  dataHandler?: (idCol, idRow, data) => void;
  allReadonly?: boolean;
  limit?: string | number;
}

export const SpaceCell = (props: ISpaceCell) => {
  const cell = props.allReadonly 
    ? renderReadOnlyCells(props) 
    : renderCellByColumnType(props);

  return cell;
}

export const TextDataCell = ({id, align, minWidth, dataHandler, rowId, columnId, cellState}: CellProps) => {
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
      <TextualAnswer answerHandler={handleData} ref={valueRef} storedValue={cellState}/>
    </TableCell>
  )
}

export const NumberDataCell = ({id, align, minWidth, dataHandler, rowId, columnId, cellState, limit}: NumberCellProps) => {
  const valueRef = useRef<HTMLInputElement>(null);

  const handleData = (data: string) => {
    dataHandler(rowId, columnId, data);
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
      <NumericalAnswer answerHandler={handleData} ref={valueRef} storedValue={cellState} limit={limit} />
    </TableCell>
  )
}

export const ReadonlyCell = ({id, align, minWidth, dataHandler, rowId, columnId, cellState}: CellProps) => {
  const valueRef = useRef<HTMLInputElement>(null);

  const handleData = (data: string) => {
    dataHandler(rowId, columnId, data);
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