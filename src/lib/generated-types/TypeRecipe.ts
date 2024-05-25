import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeRecipeFields {
  title: EntryFields.Symbol;
  shortDescription?: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  thumbnail: Asset;
  featuredImage: Asset;
  ingredients: EntryFields.Symbol[];
  cookingTime: EntryFields.Integer;
  method: EntryFields.RichText;
}

export type TypeRecipe = Entry<TypeRecipeFields>;
