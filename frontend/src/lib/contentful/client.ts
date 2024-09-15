import "server-only";
import { createClient } from "contentful";
import { createClient as createWriteClient } from "contentful-management";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});
export const contentfulManagementClient = createWriteClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
});
