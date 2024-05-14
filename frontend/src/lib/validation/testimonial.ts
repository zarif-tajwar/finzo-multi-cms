import { z, infer } from "zod";

export const TestimonialSchema = z.object({
  name: z.string(),
  profession: z.string(),
  testimony: z.string(),
  image: z.object({
    url: z.string(),
    width: z.number(),
    height: z.number(),
    alt: z.string().nullish(),
  }),
});

export const TestimonialsSchema = z.array(TestimonialSchema);

export type TestimonialClientData = z.infer<typeof TestimonialSchema>;
