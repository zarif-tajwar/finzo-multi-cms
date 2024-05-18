import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImagesCloudinaryFields {
    cloudinaryObject: EntryFieldTypes.Object;
}

export type TypeImagesCloudinarySkeleton = EntrySkeletonType<TypeImagesCloudinaryFields, "imagesCloudinary">;
export type TypeImagesCloudinary<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeImagesCloudinarySkeleton, Modifiers, Locales>;
