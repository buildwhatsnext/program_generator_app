import { DeleteKey } from './table.keys';
import { ISpaceCell, TextDataCell, ReadonlyCell, NumberDataCell } from './table.cell';

export default function renderCellByColumnType(props: ISpaceCell) {
  const {
    row,
    rowIndex,
    column,
    columnIndex,
    storedData,
    deleteHandler,
    dataHandler,
    limit
  } = props;

  let cell;
  const text = (
    <TextDataCell 
      id={`${row.id}-${column.id}`}
      align={column.align}
      minWidth={column.minWidth}
      rowId={rowIndex.toString()}
      columnId={columnIndex.toString()}
      dataHandler={dataHandler}
      cellState={storedData}
    />
  )

  const number = (
    <NumberDataCell 
      id={`${row.id}-${column.id}`}
      align={column.align}
      minWidth={column.minWidth}
      rowId={rowIndex.toString()}
      columnId={columnIndex.toString()}
      dataHandler={dataHandler}
      cellState={storedData}
      limit={limit}
    />
  )

  const readonly = (
    <ReadonlyCell 
      id={`readonly-${row.id}-${column.id}`}
      align={column.align}
      minWidth={column.minWidth}
      rowId={rowIndex.toString()}
      columnId={columnIndex.toString()}
      dataHandler={dataHandler}
      cellState={storedData}
    />
  )

  const deleteKey = <DeleteKey elementIndex={rowIndex} handler={deleteHandler} />;

  switch(column.id) {
    case 'delete':
      cell = deleteKey;
      break;
    case 'seatTotal':
    case 'areaTotal':
      cell = readonly;
      break;
    case 'seats':
    case 'area':
    case 'quantitySelected':
      cell = number;
      break;
    default:
      cell = text;
      break;
  }

  return cell;
}

export function renderReadOnlyCells(props: ISpaceCell) {
  const {
    row,
    rowIndex,
    column,
    columnIndex,
    storedData,
    deleteHandler,
    dataHandler
  } = props;

  let cell; 

  const readonly = (
    <ReadonlyCell 
      id={`readonly-${row.id}-${column.id}`}
      align={column.align}
      minWidth={column.minWidth}
      rowId={rowIndex.toString()}
      columnId={columnIndex.toString()}
      dataHandler={dataHandler}
      cellState={storedData}
    />
  )

  const deleteKey = <DeleteKey elementIndex={rowIndex} handler={deleteHandler} />;

  switch(column.id) {
    case 'delete':
      cell = deleteKey;
      break;
    default:
      cell = readonly
      break;
  }

  return cell;
}