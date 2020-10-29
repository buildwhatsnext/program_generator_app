/* eslint-disable react/require-default-props */
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { TextualAnswer } from '../info/answer';

import styles from './table.module.scss';

interface CellProps {
  id: string;
  align: "left" | "center" | "right" | "justify" | "inherit";
  minWidth: number;
  handler?: () => void;
}

export const SpaceCell = ({id, align, minWidth, handler}: CellProps) => (
  <TableCell 
    key={id} 
    align={align} 
    style={{ 
      minWidth: `${minWidth}rem`,
    }}
    className={styles.tableCell__override}
  >
    <TextualAnswer answerHandler={handler} />
  </TableCell>
)