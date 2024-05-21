import type { Entry, EntryFields } from "contentful";

export interface TypeComponent_textFields {
    title?: EntryFields.Symbol;
    text?: EntryFields.RichText;
}

export type TypeComponent_text = Entry<TypeComponent_textFields>;
