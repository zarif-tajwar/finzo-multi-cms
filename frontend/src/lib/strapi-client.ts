// in src/api/index.ts
import createClient from "openapi-fetch";
import type { paths } from "./types/strapi";
import qs from "qs";

export const strapiClient = createClient<paths>({
  baseUrl: `${process.env.STRAPI_BACKEND_URL}/api`,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    Accept: "application/json",
  },
  querySerializer(params) {
    return qs.stringify(params, {
      encodeValuesOnly: true,
    });
  },
});
