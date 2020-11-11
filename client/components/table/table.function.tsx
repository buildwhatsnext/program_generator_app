import { DeleteKey } from './table.keys';
import { ISpaceCell, DataEntryCell, ReadonlyCell } from './table.cell';

export default function renderCellByColumnType(props: ISpaceCell) {
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
  const data = (
    <DataEntryCell 
      id={`${row.id}-${column.id}`}
      align={column.align}
      minWidth={column.minWidth}
      rowId={rowIndex.toString()}
      columnId={columnIndex.toString()}
      dataHandler={dataHandler}
      cellState={storedData}
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
    default:
      cell = data;
      break;
  }

  return cell;
}