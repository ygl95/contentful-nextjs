import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeComponent_imageFields {
    title?: EntryFields.Symbol;
    name?: EntryFields.Symbol;
    image?: Asset;
}

export type TypeComponent_image = Entry<TypeComponent_imageFields>;
