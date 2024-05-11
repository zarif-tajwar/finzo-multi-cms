import Image from "next/image";
import { Button } from "../button";
import { Paragraph, SecondHeading, Section } from "../common";
import { Arrow } from "../icons";

const Testimonials = () => {
  return (
    <Section>
      <div className="grid grid-cols-2">
        <SecondHeading className="col-start-2 col-end-2 mx-0 max-w-[45rem] text-wrap text-left">
          Join 15+ million people who already trust us with their money
        </SecondHeading>
      </div>
      <div className="grid grid-cols-2 rounded-4xl bg-offwhite">
        <div>
          <div className="relative h-full w-full">
            <div className="absolute bottom-0 h-[32rem] w-full">
              <Image
                src={"/images/testimonials/testifier1.png"}
                alt="Picture of testifier 1"
                fill
                className="object-scale-down object-bottom"
              />
            </div>
          </div>
        </div>
        <div className="py-16 pr-16">
          <Paragraph className="mb-11">
            Overall, this ap has been a life -changer for me. It has
            revolutionized the way I approach my finances, providing me with the
            tools, insights, and security I need to unlock my financial freedom.
          </Paragraph>
          <div className="flex items-center justify-between">
            <p className="text-4xl font-medium">Mark Human</p>
            <div className="flex gap-4">
              <Button variant={"outline"} size={"icon"}>
                <Arrow className="rotate-180" />
              </Button>
              <Button variant={"outline"} size={"icon"}>
                <Arrow />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Testimonials;
