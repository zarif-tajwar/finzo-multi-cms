import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNewsletterSubscribedEmailsFields {
    email: EntryFieldTypes.Symbol;
}

export type TypeNewsletterSubscribedEmailsSkeleton = EntrySkeletonType<TypeNewsletterSubscribedEmailsFields, "newsletterSubscribedEmails">;
export type TypeNewsletterSubscribedEmails<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNewsletterSubscribedEmailsSkeleton, Modifiers, Locales>;
