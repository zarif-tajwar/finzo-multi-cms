import { Button } from "@/components/button";
import { Container } from "@/components/common";
import Link from "next/link";

export const revalidate = 86400;

export default function Home() {
  return (
    <Container asChild>
      <main>
        <Button asChild variant={"outline"}>
          <Link href={"/strapi"}>Strapi</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={"/sanity"}>sanity</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={"/contentful"}>contentful</Link>
        </Button>
      </main>
    </Container>
  );
}
