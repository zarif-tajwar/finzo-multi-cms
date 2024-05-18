import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTotalUserCompanyCountFields {
    value: EntryFieldTypes.Integer;
}

export type TypeTotalUserCompanyCountSkeleton = EntrySkeletonType<TypeTotalUserCompanyCountFields, "totalUserCompanyCount">;
export type TypeTotalUserCompanyCount<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTotalUserCompanyCountSkeleton, Modifiers, Locales>;
