import {
  GetTestimonialsType,
  GetTotalUsersInMillionsType,
} from "@/lib/types/common";
import TestimonialsClient from "./testimonials-client";

const Testimonials = async ({
  getTestimonials,
  getTotalUsersInMillions,
}: {
  getTestimonials: GetTestimonialsType;
  getTotalUsersInMillions: GetTotalUsersInMillionsType;
}) => {
  const testimonialsPromise = getTestimonials();
  const totalUsersInMillionsPromise = getTotalUsersInMillions();

  const [testimonials, totalUsersInMillions] = await Promise.all([
    testimonialsPromise,
    totalUsersInMillionsPromise,
  ]);

  if (!testimonials) return null;

  return (
    <TestimonialsClient
      totalUsersInMillions={totalUsersInMillions || 15}
      testimonials={testimonials}
    />
  );
};
export default Testimonials;
