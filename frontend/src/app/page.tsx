import { Container } from "@/components/common";
import Hero from "@/components/hero-section/hero";

export default function Home() {
  return (
    <Container asChild>
      <main>
        <Hero />
      </main>
    </Container>
  );
}
