import { type CollectionConfig } from "payload/types";

export const testimonialCollection: CollectionConfig = {
  slug: "testimonials",
  fields: [
    { name: "name", type: "text", label: "Testifier's name", required: true },
    {
      name: "profession",
      type: "text",
      label: "Testifier's profession",
      required: true,
    },
    { name: "testimony", type: "text", label: "Testimony", required: true },
    { name: "image", type: "upload", relationTo: "media", required: true },
  ],
};
