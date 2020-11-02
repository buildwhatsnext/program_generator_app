import { ISpace } from '../spaces/Space';
import { ISpaceColumn } from './table.column';
import { DeleteKey } from './table.keys';
import { ISpaceCell, DataEntryCell } from './table.cell';

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
    <DataEntryCell 
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
    case 'qty_selected':
    case 'seats_total':
    case 'area_total':
      cell = readonly;
      break;
    default:
      cell = data;
      break;
  }

  return cell;
}