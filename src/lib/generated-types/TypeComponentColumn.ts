import type { Entry, EntryFields } from 'contentful';

export interface TypeComponentColumnFields {
  name: EntryFields.Symbol;
  columnTitle?: EntryFields.Symbol;
  columns?: Entry<Record<string, any>>[];
  cssClass?: EntryFields.Symbol;
}

export type TypeComponentColumn = Entry<TypeComponentColumnFields>;
