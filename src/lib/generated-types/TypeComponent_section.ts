import type { Entry, EntryFields } from 'contentful';

export interface TypeComponent_sectionFields {
  name?: EntryFields.Symbol;
  columns?: Entry<Record<string, any>>[];
  cssClass?: EntryFields.Symbol;
}

export type TypeComponent_section = Entry<TypeComponent_sectionFields>;
