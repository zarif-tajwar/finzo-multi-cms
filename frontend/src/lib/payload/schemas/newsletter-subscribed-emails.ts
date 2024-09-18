import { type CollectionConfig } from "payload/types";

export const NewsletterSubscribedEmailsCollection: CollectionConfig = {
  slug: "newsletter-subscribed-emails",
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
  ],
};
