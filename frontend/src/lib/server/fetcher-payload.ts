import "server-only";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cache } from "react";
import { z } from "zod";
import { Media } from "../../../payload-types";
import configPromise from "../payload/payload.config";
import { StrapiWebhookPayloadSchema } from "../validation/strapi";
import { TestimonialsSchema } from "../validation/testimonial";

export const getTestimonials = async () => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data = await payload
    .find({
      collection: "testimonials",
      depth: 1,
    })
    .then((data) =>
      data.docs.map((obj) => ({
        name: obj.name,
        profession: obj.profession,
        testimony: obj.testimony,
        image: {
          url: (obj.image as Media).url,
          width: (obj.image as Media).width,
          height: (obj.image as Media).height,
          alt: (obj.image as Media).alt,
        },
      })),
    );

  const parseData = TestimonialsSchema.safeParse(data);
  if (!parseData.success) return;
  return parseData.data;
};

export const getTotalUsersInMillions = cache(async () => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data = await payload.findGlobal({ slug: "total-users-in-millions" });
  const parsedData = z.number().safeParse(data.value);
  if (!parsedData.success) return;
  return parsedData.data;
});

export const getTotalUserCompanies = cache(async () => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data = await payload.findGlobal({ slug: "total-user-companies" });
  const parsedData = z.number().safeParse(data.value);
  if (!parsedData.success) return;
  return parsedData.data;
});

export const isValidWebhookEventForRevalidation = async (req: Request) => {
  const payload = await req.json();
  const parsePayload = StrapiWebhookPayloadSchema.safeParse(payload);
  if (!parsePayload.success)
    return {
      error: "Webhook payload schema did not match!",
      shouldRevalidate: false,
    };
  if (parsePayload.data.model === "newsletter-subscribed-email")
    return { error: "", shouldRevalidate: false };
  return { error: "", shouldRevalidate: true };
};
