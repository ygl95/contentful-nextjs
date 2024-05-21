import type { Entry, EntryFields } from "contentful";
import type { TypeComponent_heroFields } from "./TypeComponent_hero";
import type { TypeSeoMetadataFields } from "./TypeSeoMetadata";

export interface TypePage_landingFields {
    title: EntryFields.Symbol;
    name?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    hero?: Entry<TypeComponent_heroFields>;
    sections?: Entry<Record<string, any>>[];
    seo?: Entry<TypeSeoMetadataFields>;
}

export type TypePage_landing = Entry<TypePage_landingFields>;
