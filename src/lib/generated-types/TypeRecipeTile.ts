import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeRecipeTileFields {
  title?: EntryFields.Symbol;
  thumbnail?: Asset;
  shortDescription?: EntryFields.Symbol;
  cookingTime?: EntryFields.Symbol;
  ctaText?: EntryFields.Symbol;
  ctaLink?: EntryFields.Symbol;
}

export type TypeRecipeTile = Entry<TypeRecipeTileFields>;
