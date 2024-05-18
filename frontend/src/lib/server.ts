import {
  EntryFieldTypes
} from "contentful";
import { cache } from "react";
import "server-only";
import { z } from "zod";
import { contentfulClient } from "./contentful/client";
import { strapiClient } from "./strapi-client";
import { TestimonialsSchema } from "./validation/testimonial";

type TestimonialSkeleton = {
  contentTypeId: "testimonial";
  fields: {
    name: EntryFieldTypes.Text;
    profession: EntryFieldTypes.Text;
    testimony: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  };
};


export const getTestimonials = async () => {
  const data = await contentfulClient.withoutUnresolvableLinks.getEntries<TestimonialSkeleton>({
    content_type: "testimonial",
  });
  const fetchedData = data.items.map((obj) => {
    const imageField = obj.fields.image?.fields
    return {
      ...obj.fields,
      image: {
        url: "https:" + imageField?.file?.url,
        alt: imageField?.description,
        width: imageField?.file?.details
          .image?.width,
        height: imageField?.file?.details
          .image?.height,
      },
    }
  });
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
