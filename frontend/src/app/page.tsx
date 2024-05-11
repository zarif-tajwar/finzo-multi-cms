import { Container } from "@/components/common";
import Features from "@/components/features-section/features";
import Hero from "@/components/hero-section/hero";
import Testimonials from "@/components/testimonials/testimonials";
import UserCompanies from "@/components/user-companies/user-companies";

export default function Home() {
  return (
    <Container asChild>
      <main>
        <Hero />
        <Features />
        <UserCompanies />
        <Testimonials />
      </main>
    </Container>
  );
}
