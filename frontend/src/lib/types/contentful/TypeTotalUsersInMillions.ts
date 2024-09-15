import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTotalUsersInMillionsFields {
    value: EntryFieldTypes.Integer;
}

export type TypeTotalUsersInMillionsSkeleton = EntrySkeletonType<TypeTotalUsersInMillionsFields, "totalUsersInMillions">;
export type TypeTotalUsersInMillions<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTotalUsersInMillionsSkeleton, Modifiers, Locales>;
