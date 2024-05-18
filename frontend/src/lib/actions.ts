"use server";

import {
  contentfulClient,
  contentfulManagementClient,
} from "./contentful/client";
import { TypeNewsletterSubscribedEmailsSkeleton } from "./types/contentful";
import { newsletterSubscribeSchema } from "./validation/news-letter";

export const newsletterSubscribeAction = async (data: { email: string }) => {
  const parsed = newsletterSubscribeSchema.safeParse(data);
  if (!parsed.success) return { error: "Invalid email!" };
  try {
    const alreadyExistingEmail =
      (await contentfulClient
        .getEntries<TypeNewsletterSubscribedEmailsSkeleton>({
          content_type: "newsletterSubscribedEmails",
          limit: 1,
          "fields.email": parsed.data.email,
        })
        .then((res) => res.total)) > 0;

    if (alreadyExistingEmail) {
      return { error: "This email is already subscribed!" };
    }

    const space = await contentfulManagementClient.getSpace(
      process.env.CONTENTFUL_SPACE_ID!,
    );
    const environment = await space.getEnvironment(
      process.env.CONTENTFUL_ENVIRONMENT!,
    );

    await environment
      .createEntry("newsletterSubscribedEmails", {
        fields: { email: { "en-US": parsed.data.email } },
      })
      .then((res) => res.publish());
  } catch (err) {
    return { error: `Something went wrong! Please try again.` };
  }
  return { success: "Subscribed to our newsletter successfully!" };
};
