import { sanityFetch } from "@/lib/sanity/client";
import { getImageWidthAndHeight, getSanityImageUrl } from "@/lib/sanity/utils";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";
import { cache } from "react";
import "server-only";
import { z } from "zod";
import { TestimonialsSchema } from "./validation/testimonial";

export const getTestimonials = async () => {
  const res = await sanityFetch<
    SanityDocument<{
      name: string;
      profession: string;
      image: SanityImageObject & { altText: string };
      testimony: string;
    }>[]
  >({
    query: `*[_type == 'testimonial']`,
  });
  const data = res.map((x) => ({
    name: x.name,
    profession: x.profession,
    image: {
      url: getSanityImageUrl(x.image)?.url(),
      alt: x.image.altText,
      ...getImageWidthAndHeight(x.image.asset._ref),
    },
    testimony: x.testimony,
  }));
  console.log(data);
  const parseData = TestimonialsSchema.safeParse(data);
  if (!parseData.success) return;
  return parseData.data;
};

export const getTotalUsersInMillions = cache(async () => {
  const fetchedData = await sanityFetch<
    SanityDocument<{
      value: number;
    }>
  >({
    query: `*[_type == 'totalUsersInMillions'] | order(_id)[0]`,
  });
  const parsedData = z.number().safeParse(fetchedData.value);
  if (!parsedData.success) return;
  return parsedData.data;
});

export const getTotalUserCompanies = cache(async () => {
  const fetchedData = await sanityFetch<
    SanityDocument<{
      value: number;
    }>
  >({
    query: `*[_type == 'totalUserCompanies'] | order(_id)[0]`,
  });
  const parsedData = z.number().safeParse(fetchedData.value);
  if (!parsedData.success) return;
  return parsedData.data;
});
