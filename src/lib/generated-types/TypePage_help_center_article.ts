import type { Entry, EntryFields } from "contentful";
import type { TypeSeoMetadataFields } from "./TypeSeoMetadata";

export interface TypePage_help_center_articleFields {
    title?: EntryFields.Symbol;
    name?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    body?: Entry<Record<string, any>>[];
    relatedPages?: Entry<Record<string, any>>[];
    seo?: Entry<TypeSeoMetadataFields>;
}

export type TypePage_help_center_article = Entry<TypePage_help_center_articleFields>;
