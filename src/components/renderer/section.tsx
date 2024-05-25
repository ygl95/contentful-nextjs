/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';

import { BlockRenderer } from 'components/renderer/block-renderer';
import { TypeComponent_section } from 'lib/types';

const Content = ({ column }: { column: unknown }) => {
  return <BlockRenderer block={column} />;
};

export function Section(section: TypeComponent_section) {
  const { columns, cssClass } = section.fields;

  if (!columns) {
    return null;
  }

  return (
    <section className={`${cssClass}`}>
      {columns.map((column, index) => (
        <Content key={index} column={column} />
      ))}
    </section>
  );
}
