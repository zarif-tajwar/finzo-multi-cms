"use client";

import Image from "next/image";
import { Paragraph, SecondHeading, Section, ThirdHeading } from "../common";
import {
  Arrow,
  FinzoIcon,
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
      <div className="grid gap-6 [--feature-padding:2rem] xl:[--feature-padding:2.75rem]">
        <div className="grid auto-rows-auto grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 md:gap-y-0">
          <div className="row-span-4 grid grid-rows-subgrid gap-0 overflow-clip rounded-4xl bg-offwhite px-[var(--feature-padding)] pt-[var(--feature-padding)]">
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
          <div className="row-span-4 grid grid-rows-subgrid gap-0 overflow-clip rounded-4xl bg-offwhite px-[var(--feature-padding)] pt-[var(--feature-padding)]">
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
        <div className="grid rounded-4xl bg-offwhite pl-[var(--feature-padding)] pt-[var(--feature-padding)] md:grid-cols-2 md:pb-[var(--feature-padding)]">
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
              className="-z-10 h-full object-cover object-left mix-blend-darken"
            />
          </div>
        </div>
        <div className="grid grid-rows-3 gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-none">
          <div className="overflow-clip rounded-4xl bg-offwhite px-[var(--feature-padding)] pt-[var(--feature-padding)]">
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
          <div className="overflow-clip rounded-4xl bg-offwhite px-[var(--feature-padding)] pt-[var(--feature-padding)]">
            <FeatureCardInfo
              heading="Subscriptions you control in one place"
              Icon={ReceiptIcon}
            />
            <div className="relative bottom-[-8%] mt-5">
              <div className="w-full">
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
          <div className="relative overflow-clip rounded-4xl bg-neutral-900 px-[var(--feature-padding)] pb-[var(--feature-padding)] pt-[var(--feature-padding)]">
            <div className="xl: relative z-20 pt-[5.5rem] xl:pt-24">
              <h3 className="relative z-10 mb-8 text-3xl font-medium text-white xl:text-4xl">
                Check our other product features
              </h3>
              <Button className="w-full sm:w-max">
                View More <Arrow className="size-7" />
              </Button>
            </div>
            <div className="absolute left-[-18.7%] top-[11.1%] z-0 w-[146.42%]">
              <AspectRatio.Root ratio={601.3 / 424.83}>
                <FinzoIcon className="h-full w-full object-fill text-white/5" />
              </AspectRatio.Root>
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
      <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary lg:mb-8 lg:size-16">
        <Icon className="size-8 lg:size-9" />
      </div>
      <h3 className="relative z-10 max-w-md text-balance text-3xl font-medium xl:text-4xl">
        {heading}
      </h3>
      {description && (
        <p className="relative z-10 pt-3 text-lg text-gray-500 md:pt-4 lg:pt-5 lg:text-xl xl:text-2xl">
          {description}
        </p>
      )}
    </>
  );
};
