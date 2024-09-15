"use server";

import { SanityDocument } from "next-sanity";
import { sanityClient } from "../sanity/client";
import { sanityFetch } from "../sanity/sanity-fetch";
import { newsletterSubscribeSchema } from "../validation/news-letter";
import type { NewsletterSubscribeActionType } from "../types/common";

export const newsletterSubscribeAction: NewsletterSubscribeActionType =
  async (data: { email: string }) => {
    const parsed = newsletterSubscribeSchema.safeParse(data);
    if (!parsed.success) return { error: "Invalid email!" };
    try {
      const alreadyExistingEmail = await sanityFetch<SanityDocument[]>({
        query: `*[_type == 'newsletterSubscribedEmails' && email == '${data.email}']`,
      });
      if (alreadyExistingEmail.length > 0)
        return {
          error: "This email is already subscribed!",
        };
      await sanityClient.create<{ email: string }>(
        {
          _type: "newsletterSubscribedEmails",
          email: parsed.data.email,
        },
        { token: process.env.SANITY_API_TOKEN },
      );
    } catch (err) {
      return { error: `Something went wrong! Please try again.` };
    }
    return { success: "Subscribed to our newsletter successfully!" };
  };
