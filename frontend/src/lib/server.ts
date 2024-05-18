import { cache } from "react";
import "server-only";
import { z } from "zod";
import { contentfulClient } from "./contentful/client";
import {
  TypeTestimonialSkeleton,
  TypeTotalUserCompanyCountSkeleton,
  TypeTotalUsersInMillionsSkeleton,
} from "./types/contentful";
import { TestimonialsSchema } from "./validation/testimonial";

export const getTestimonials = async () => {
  const data =
    await contentfulClient.withoutUnresolvableLinks.getEntries<TypeTestimonialSkeleton>(
      {
        content_type: "testimonial",
      },
    );
  const fetchedData = data.items.map((obj) => {
    const imageField = obj.fields.image?.fields;
    return {
      ...obj.fields,
      image: {
        url: "https:" + imageField?.file?.url,
        alt: imageField?.description,
        width: imageField?.file?.details.image?.width,
        height: imageField?.file?.details.image?.height,
      },
    };
  });
  const parseData = TestimonialsSchema.safeParse(fetchedData);
  if (!parseData.success) return;
  return parseData.data;
};

export const getTotalUsersInMillions = cache(async () => {
  const fetchedData =
    await contentfulClient.getEntries<TypeTotalUsersInMillionsSkeleton>({
      content_type: "totalUsersInMillions",
      limit: 1,
    });
  const parsedData = z
    .number()
    .safeParse(fetchedData.items.at(0)?.fields.value);
  if (!parsedData.success) return;
  return parsedData.data;
});

export const getTotalUserCompanies = cache(async () => {
  const fetchedData =
    await contentfulClient.getEntries<TypeTotalUserCompanyCountSkeleton>({
      content_type: "totalUserCompanyCount",
      limit: 1,
    });
  const parsedData = z
    .number()
    .safeParse(fetchedData.items.at(0)?.fields.value);
  if (!parsedData.success) return;
  return parsedData.data;
});
