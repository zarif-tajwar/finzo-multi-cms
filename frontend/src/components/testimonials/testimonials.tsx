import { strapiClient } from "@/lib/strapi-client";
import { TestimonialsSchema } from "@/lib/validation/testimonial";
import TestimonialsClient from "./testimonials-client";

const Testimonials = async () => {
  const fetchedData = await strapiClient
    .GET("/testimonials", {
      params: { query: { populate: "image", sort: "sortOrder:desc" } },
    })
    .then((res) =>
      res.data?.data?.map((obj) => ({
        name: obj.attributes?.name,
        testimony: obj.attributes?.testimony,
        profession: obj.attributes?.profession,
        image: {
          url: obj.attributes?.image.data?.attributes?.url,
          width: obj.attributes?.image.data?.attributes?.width,
          height: obj.attributes?.image.data?.attributes?.height,
          alt: obj.attributes?.image.data?.attributes?.alternativeText,
        },
      })),
    );

  const parseData = TestimonialsSchema.safeParse(fetchedData);

  if (!parseData.success) {
    return null;
  }

  return <TestimonialsClient testimonials={parseData.data} />;
};
export default Testimonials;
