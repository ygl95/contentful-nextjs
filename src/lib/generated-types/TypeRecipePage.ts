import type { Entry, EntryFields } from "contentful";
import type { TypeRecipeFields } from "./TypeRecipe";
import type { TypeSeoMetadataFields } from "./TypeSeoMetadata";

export interface TypeRecipePageFields {
    title: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    seoMetadata: Entry<TypeSeoMetadataFields>;
    body?: Entry<TypeRecipeFields>;
}

export type TypeRecipePage = Entry<TypeRecipePageFields>;
