"use client";

import Image from "next/image";
import { Paragraph, SecondHeading, Section, ThirdHeading } from "../common";
import {
  Arrow,
  LineChartIcon,
  MobileIcon,
  MoneySendIcon,
  ReceiptIcon,
} from "../icons";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { Button } from "../button";

const Features = () => {
  return (
    <Section>
      <SecondHeading>Feel the best experince with our features</SecondHeading>
      <div className="grid gap-6">
        <div className="grid auto-rows-auto grid-cols-2 gap-x-6">
          <div className="row-span-4 grid grid-rows-subgrid gap-0 overflow-clip rounded-4xl bg-offwhite px-11 pt-11">
            <FeatureCardInfo
              heading="Custom and design your card, make it look unique"
              description="Create a custom card that reflects your uinque style and personality.
        Choose from a range of colors, patterns, and designs to customize the
        look of your card."
              Icon={MobileIcon}
            />
            <div className="relative mt-5">
              <AspectRatio.Root ratio={538 / 451}>
                <div className="absolute left-0 top-[6.77%] z-10 w-[62%]">
                  <AspectRatio.Root ratio={671 / 1011}>
                    <Image
                      src={"/images/features/credit-card-dark.png"}
                      width={671}
                      height={1011}
                      alt="Finzo credit card dark"
                      className="h-full w-full object-cover drop-shadow-sm"
                    />
                  </AspectRatio.Root>
                </div>
                <div className="absolute right-0 top-[29.93%] z-20 w-[62%]">
                  <AspectRatio.Root ratio={671 / 1011}>
                    <Image
                      src={"/images/features/credit-card-light.png"}
                      width={671}
                      height={1011}
                      alt="Finzo credit card light"
                      className="h-full w-full object-cover drop-shadow-md"
                    />
                  </AspectRatio.Root>
                </div>
              </AspectRatio.Root>
            </div>
          </div>
          <div className="row-span-4 grid grid-rows-subgrid gap-0 overflow-clip rounded-4xl bg-offwhite px-11 pt-11">
            <FeatureCardInfo
              heading="Personalized your Financial insights and goals"
              description="Track your sending patterns,analyze income or expenses easily, and recieve personalized recommendations to optimize your financial habits."
              Icon={LineChartIcon}
            />
            <div className="relative mt-5">
              <AspectRatio.Root ratio={538 / 451}>
                <div className="absolute left-0 top-[6.77%] z-10 w-[83.83%]">
                  <AspectRatio.Root ratio={902 / 896}>
                    <Image
                      src={"/images/features/stats.png"}
                      width={902}
                      height={896}
                      alt="Finzo stats"
                      className="h-full w-full object-cover drop-shadow-sm"
                    />
                  </AspectRatio.Root>
                </div>
                <div className="absolute right-0 top-[19.29%] z-10 w-[43.457%]">
                  <AspectRatio.Root ratio={468 / 461}>
                    <Image
                      src={"/images/features/savings.png"}
                      width={468}
                      height={896}
                      alt="Finzo savings"
                      className="h-full w-full object-cover drop-shadow-md"
                    />
                  </AspectRatio.Root>
                </div>
              </AspectRatio.Root>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-4xl bg-offwhite px-11 pb-11 pt-11">
          <div>
            <FeatureCardInfo
              heading="Free Transfer anywhere around the world"
              description="Create a custom card that reflects your uinque style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card."
              Icon={MoneySendIcon}
            />
          </div>
          <div>
            <Image
              src={"/images/features/map.png"}
              width={634}
              height={380}
              alt="A map showing finzo finance is available world wide"
              className="h-full object-cover object-left mix-blend-darken"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="overflow-clip rounded-4xl bg-offwhite px-11 pt-11">
            <FeatureCardInfo
              heading="Hold money in 30+ currencies"
              Icon={MobileIcon}
            />
            <div className="relative mt-5">
              <AspectRatio.Root ratio={320.67 / 140.81}>
                <div className="absolute left-[-9.667%] top-[-78.96%] w-[142.3%]">
                  <AspectRatio.Root ratio={497 / 408}>
                    <Image
                      src={"/images/features/currencies.png"}
                      width={497}
                      height={408}
                      alt="Finzo currencies"
                      className="w-full object-cover object-right"
                    />
                  </AspectRatio.Root>
                </div>
              </AspectRatio.Root>
            </div>
          </div>
          <div className="overflow-clip rounded-4xl bg-offwhite px-11 pt-11">
            <FeatureCardInfo
              heading="Subscriptions you control in one place"
              Icon={ReceiptIcon}
            />
            <div className="relative mt-5">
              <div className="w-full translate-y-[22%]">
                <Image
                  src={"/images/features/subscriptions.png"}
                  width={642}
                  height={264}
                  alt="Finzo currencies"
                  className="w-full object-cover object-right"
                />
              </div>
            </div>
          </div>
          <div className="overflow-clip rounded-4xl bg-neutral-900 px-11 pb-11 pt-11">
            <div className="flex h-full flex-col items-start justify-end">
              <ThirdHeading className="mb-12 text-white">
                Check our other product features
              </ThirdHeading>
              <Button>
                View More <Arrow className="size-7" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Features;

const FeatureCardInfo = ({
  heading,
  description,
  Icon,
}: {
  heading: string;
  description?: string;
  Icon: typeof MobileIcon;
}) => {
  return (
    <>
      <div className="mb-12 flex size-16 items-center justify-center rounded-full bg-primary">
        <Icon className="size-9" />
      </div>
      <ThirdHeading>{heading}</ThirdHeading>
      {description && <Paragraph className="pt-5">{description}</Paragraph>}
    </>
  );
};
