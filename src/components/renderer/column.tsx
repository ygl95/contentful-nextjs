import React from 'react';
import { BlockRenderer } from './block-renderer';
import { TypeComponentColumn } from 'lib/generated-types';

const SubColumn = ({ subColumn }: { subColumn: unknown }) => {
  return <BlockRenderer block={subColumn} />;
};

export function Column(section: TypeComponentColumn) {
  const { columns, cssClass, columnTitle } = section.fields;

  if (!columns) {
    return null;
  }

  return (
    <div className={`${cssClass}`}>
      {columnTitle && <h3>{columnTitle}</h3>}
      {columns.map((column, index) => (
        <SubColumn key={index} subColumn={column} />
      ))}
    </div>
  );
}
