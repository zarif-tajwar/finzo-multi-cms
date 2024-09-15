import { createClient } from "next-sanity";
import { projectId, apiVersion, dataset, useCdn } from "./env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
  stega: {
    enabled: process.env.NODE_ENV === "development",
    studioUrl: "/studio",
  },
});
