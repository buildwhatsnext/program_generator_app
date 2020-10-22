import React from 'react';

export function DataEntrySection({title, data = null}) {
  return (
    <div className="section">
      <div className="section__title">
        <h2>
          {title}
        </h2>
      </div>
      <div className="section__content">
        { data }
      </div>
    </div>
  )
}