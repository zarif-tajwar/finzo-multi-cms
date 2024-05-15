import "server-only";
import { strapiClient } from "./strapi-client";
import { TestimonialsSchema } from "./validation/testimonial";
import { cache } from "react";
import { z } from "zod";

export const getTestimonials = async () => {
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

export const getTotalUsersInMillions = cache(async () => {
  const fetchedData = await strapiClient.GET("/total-user-in-millions");
  const parsedData = z
    .number()
    .safeParse(fetchedData.data?.data?.attributes?.count);
  if (!parsedData.success) return;
  return parsedData.data;
});

export const getTotalUserCompanies = cache(async () => {
  const fetchedData = await strapiClient.GET("/total-user-company-count");
  const parsedData = z
    .number()
    .safeParse(fetchedData.data?.data?.attributes?.count);
  if (!parsedData.success) return;
  return parsedData.data;
});
