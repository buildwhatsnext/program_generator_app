import { ISpace, SpaceType } from '../spaces/Space';

export interface ISpaceColumn {
  id: string,
  label: string,
  minWidth?: number,
  align?: 'left' | 'center' | 'right',
  format?: (value: number) => string
}

function convertEnumToString(value: SpaceType) {
  const name = SpaceType[value];

  return name;
}

export const SpaceColumns: ISpaceColumn[] = [
  { 
    id: 'delete', 
    label: '', 
    minWidth: 1
  },
  { 
    id: 'name', 
    label: 'Name', 
    minWidth: 14
  },
  { 
    id: 'seats', 
    label: 'Seats', 
    minWidth: 2 
  },
  {
    id: 'ratio',
    label: 'Ratio',
    minWidth: 2,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'area',
    label: 'Area',
    minWidth: 2,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'qty_selected',
    label: 'Quantity Selected',
    minWidth: 2,
    format: (value: number) => value.toFixed(2),
  },
  { 
    id: 'seats_total', 
    label: 'Total Seats', 
    minWidth: 2 
  },
  { 
    id: 'area_total', 
    label: 'Total Area', 
    minWidth: 2 
  },
];