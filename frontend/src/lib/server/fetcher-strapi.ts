import { cache } from "react";
import "server-only";
import { z } from "zod";
import { strapiClient } from "../strapi-client";
import type {
  GetTestimonialsType,
  GetTotalUserCompaniesType,
  GetTotalUsersInMillionsType,
} from "../types/common";
import { StrapiWebhookPayloadSchema } from "../validation/strapi";
import { TestimonialsSchema } from "../validation/testimonial";

export const getTestimonials: GetTestimonialsType = async () => {
  const fetchedData = await strapiClient
    .GET("/testimonials", {
      params: { query: { populate: "image", sort: "sortOrder:desc" } },
    })
    .then((res) =>
      res.data?.data?.map((obj) => ({
        name: obj.attributes?.name,
        testimony: obj.attributes?.testimony,
        profession: obj.attributes?.profession,
        image: {
          url: obj.attributes?.image.data?.attributes?.url,
          width: obj.attributes?.image.data?.attributes?.width,
          height: obj.attributes?.image.data?.attributes?.height,
          alt: obj.attributes?.image.data?.attributes?.alternativeText,
        },
      })),
    );
  const parseData = TestimonialsSchema.safeParse(fetchedData);
  if (!parseData.success) return;
  return parseData.data;
};

export const getTotalUsersInMillions: GetTotalUsersInMillionsType = cache(
  async () => {
    const fetchedData = await strapiClient.GET("/total-user-in-millions");
    const parsedData = z
      .number()
      .safeParse(fetchedData.data?.data?.attributes?.count);
    if (!parsedData.success) return;
    return parsedData.data;
  },
);

export const getTotalUserCompanies: GetTotalUserCompaniesType = cache(
  async () => {
    const fetchedData = await strapiClient.GET("/total-user-company-count");
    const parsedData = z
      .number()
      .safeParse(fetchedData.data?.data?.attributes?.count);
    if (!parsedData.success) return;
    return parsedData.data;
  },
);

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
