import React from 'react';

export function DataEntrySection({title, data = null}) {
  return (
    <div className="section">
      <div className="section__title">{title}</div>
      <div className="section__content">
        { data }
      </div>
    </div>
  )
}