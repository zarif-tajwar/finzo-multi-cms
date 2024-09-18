"use server";

import configPromise from "../payload/payload.config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { newsletterSubscribeSchema } from "../validation/news-letter";

export const newsletterSubscribeAction = async (data: { email: string }) => {
  const parsed = newsletterSubscribeSchema.safeParse(data);
  if (!parsed.success) return { error: "Invalid email!" };
  const payload = await getPayloadHMR({ config: configPromise });
  try {
    await payload.create({
      collection: "newsletter-subscribed-emails",
      data: parsed.data,
    });
    return { success: "Subscribed to our newsletter successfully!" };
  } catch (err: any) {
    if (err.data[0].message === "Value must be unique") {
      return { error: "This email is already subscribed!" };
    }
  }
  return { error: "Something went wrong!" };
};
