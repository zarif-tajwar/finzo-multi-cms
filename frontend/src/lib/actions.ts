"use server";

import { SanityDocument } from "next-sanity";
import { sanityClient, sanityFetch } from "./sanity/client";
import { newsletterSubscribeSchema } from "./validation/news-letter";

export const newsletterSubscribeAction = async (data: { email: string }) => {
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
    await sanityClient.create<{ email: string }>({
      _type: "newsletterSubscribedEmails",
      email: parsed.data.email,
    });
  } catch (err) {
    return { error: `Something went wrong! Please try again.` };
  }
  return { success: "Subscribed to our newsletter successfully!" };
};
