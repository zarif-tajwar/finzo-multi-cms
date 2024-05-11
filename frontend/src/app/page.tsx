import { Container } from "@/components/common";
import Features from "@/components/features-section/features";
import Hero from "@/components/hero-section/hero";

export default function Home() {
  return (
    <Container asChild>
      <main>
        <Hero />
        <Features />
      </main>
    </Container>
  );
}
