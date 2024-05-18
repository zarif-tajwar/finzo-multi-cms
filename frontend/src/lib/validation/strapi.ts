import { z } from "zod";

export const StrapiWebhookPayloadSchema = z.object({
  event: z.string(),
  createdAt: z.coerce.date(),
  model: z.string(),
  uid: z.string(),
  entry: z.any(),
});
