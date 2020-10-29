/* eslint-disable react/require-default-props */
import React, { useRef } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { TextualAnswer } from '../info/answer';

import styles from './table.module.scss';

interface CellProps {
  id: string;
  align: "left" | "center" | "right" | "justify" | "inherit";
  minWidth: number;
  dataHandler?: (rowId, colId, data) => void;
  rowId: string;
  columnId: string;
}

export const SpaceCell = ({id, align, minWidth, dataHandler, rowId, columnId}: CellProps) => {
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
      <TextualAnswer answerHandler={handleData} passedRef={valueRef} />
    </TableCell>
  )
  
}