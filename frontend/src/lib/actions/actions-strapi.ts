"use server";

import { strapiClient } from "../strapi-client";
import { newsletterSubscribeSchema } from "../validation/news-letter";

export const newsletterSubscribeAction = async (data: { email: string }) => {
  const parsed = newsletterSubscribeSchema.safeParse(data);
  if (!parsed.success) return { error: "Invalid email!" };
  const res = await strapiClient.POST("/newsletter-subscribed-emails", {
    body: { data: { email: data.email } },
  });
  if (res.error?.error.message === "This attribute must be unique") {
    return { error: "This email is already subscribed!" };
  }
  if (res.error) {
    console.log(res.error.error.message);
    return { error: `Something went wrong! Please try again.` };
  }
  return { success: "Subscribed to our newsletter successfully!" };
};
