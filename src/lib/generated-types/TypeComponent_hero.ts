import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeComponent_heroFields {
    title: EntryFields.Symbol;
    image: Asset;
    description?: EntryFields.Symbol;
    ctaText?: EntryFields.Symbol;
    ctaLink?: Entry<Record<string, any>>;
}

export type TypeComponent_hero = Entry<TypeComponent_heroFields>;
