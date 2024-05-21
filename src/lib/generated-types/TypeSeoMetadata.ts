import type { Entry, EntryFields } from "contentful";

export interface TypeSeoMetadataFields {
    title: EntryFields.Symbol;
    description: EntryFields.Symbol;
    noIndex?: EntryFields.Boolean;
    noFollow?: EntryFields.Boolean;
}

export type TypeSeoMetadata = Entry<TypeSeoMetadataFields>;
