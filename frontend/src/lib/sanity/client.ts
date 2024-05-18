import "server-only";

import { createClient, type QueryParams } from "next-sanity";

export const sanityClient = createClient({
  projectId: "kmb63xxa",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return sanityClient.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
      tags,
    },
  });
}
