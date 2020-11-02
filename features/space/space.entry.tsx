import React from 'react';
import { DataEntrySection } from '../../components/display/display.entry';

export function WorkspaceDataEntrySection({title, data}) {
  return (
    <DataEntrySection title={title} data={data}/>
  )
}