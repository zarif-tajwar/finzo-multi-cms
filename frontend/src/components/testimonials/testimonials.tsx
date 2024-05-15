import { getTestimonials, getTotalUsersInMillions } from "@/lib/server";
import TestimonialsClient from "./testimonials-client";

const Testimonials = async () => {
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
