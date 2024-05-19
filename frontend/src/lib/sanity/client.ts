import "server-only";

import { createClient, type QueryParams } from "next-sanity";

export const sanityClient = createClient({
  projectId: "kmb63xxa",
  dataset: "production",
  apiVersion: "2024-01-01",
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
      tags,
    },
    cache: "no-store",
    useCdn: false,
  });
}
