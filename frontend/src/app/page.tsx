import { Button } from "@/components/button";
import { Paragraph, SecondHeading, ThirdHeading } from "@/components/common";
import { Arrow, ArrowLong } from "@/components/icons";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen grid place-items-center">
        <Button size={"lg"}>
          Click me
          <ArrowLong />
        </Button>
        <Button size={"icon"} variant={"outline"}>
          <Arrow />
        </Button>
        <SecondHeading>Feel the best experince with our features</SecondHeading>
        <ThirdHeading>
          Custom and design your card, make it look unique
        </ThirdHeading>
        <Paragraph>
          From easy money management, to financial goals and investments. Open
          your account in a Flash
        </Paragraph>
      </div>
    </main>
  );
}
