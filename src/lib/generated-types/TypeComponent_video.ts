import type { Entry, EntryFields } from "contentful";

export interface TypeComponent_videoFields {
    title?: EntryFields.Symbol;
    youtubeVideoId?: EntryFields.Symbol;
}

export type TypeComponent_video = Entry<TypeComponent_videoFields>;
