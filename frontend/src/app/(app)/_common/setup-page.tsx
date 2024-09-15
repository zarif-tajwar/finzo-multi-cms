import { Container } from "@/components/common";
import Features from "@/components/features-section/features";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero-section/hero";
import Testimonials from "@/components/testimonials/testimonials";
import UserCompanies from "@/components/user-companies/user-companies";
import type {
  GetTestimonialsType,
  GetTotalUserCompaniesType,
  GetTotalUsersInMillionsType,
  NewsletterSubscribeActionType,
} from "@/lib/types/common";

export const SetupPage = async ({
  getTotalUsersInMillions,
  getTotalUserCompanies,
  getTestimonials,
  newsletterSubscribeAction,
}: {
  getTotalUsersInMillions: GetTotalUsersInMillionsType;
  getTotalUserCompanies: GetTotalUserCompaniesType;
  getTestimonials: GetTestimonialsType;
  newsletterSubscribeAction: NewsletterSubscribeActionType;
}) => {
  return (
    <>
      <Container asChild>
        <main>
          <Hero getTotalUsersInMillions={getTotalUsersInMillions} />
          <Features />
          <UserCompanies getTotalUserCompanies={getTotalUserCompanies} />
          <Testimonials
            getTestimonials={getTestimonials}
            getTotalUsersInMillions={getTotalUsersInMillions}
          />
        </main>
      </Container>
      <Footer newsletterSubscribeAction={newsletterSubscribeAction} />
    </>
  );
};
