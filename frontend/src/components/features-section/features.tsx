"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { SplitWords } from "../animations/split-text";
import { Button } from "../button";
import { SecondHeading, Section } from "../common";
import {
  Arrow,
  FinzoIcon,
  LineChartIcon,
  MobileIcon,
  MoneySendIcon,
  ReceiptIcon,
} from "../icons";

const MotionSecondHeading = motion.create(SecondHeading);
const MotionImage = motion.create(Image);
const MotionButton = motion.create(Button);

const headingAnimationParentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const slideVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const visaCardParentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0,
    },
  },
};
const blackVisaCardVariants: Variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backInOut",
    },
  },
};

const whiteVisaCardVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backInOut",
    },
  },
};

const financialStatsVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backInOut",
    },
  },
};
const financialSavingsVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backInOut",
    },
  },
};
const mapVariants: Variants = {
  initial: {
    filter: "blur(100px)",
  },
  animate: {
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const cardAnimationParentVariants: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.6 } },
};

const Features = () => {
  return (
    <Section>
      <MotionSecondHeading
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        variants={headingAnimationParentVariants}
      >
        <SplitWords variants={slideVariants}>
          Feel the best experince with our features
        </SplitWords>
      </MotionSecondHeading>
      <div className="grid gap-6 [--feature-padding:2rem] xl:[--feature-padding:2.75rem]">
        <div className="grid auto-rows-auto grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 md:gap-y-0">
          {/* Visa Card */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "some" }}
            variants={cardAnimationParentVariants}
            className="row-span-4 grid grid-rows-subgrid gap-0 overflow-clip rounded-4xl bg-offwhite px-[var(--feature-padding)] pt-[var(--feature-padding)]"
          >
            <FeatureCardInfo
              heading="Custom and design your card, make it look unique"
              description="Create a custom card that reflects your uinque style and personality.
        Choose from a range of colors, patterns, and designs to customize the
        look of your card."
              Icon={MobileIcon}
            />
            <motion.div
              variants={visaCardParentVariants}
              className="relative mt-5"
            >
              <AspectRatio.Root ratio={538 / 451}>
                <motion.div
                  variants={blackVisaCardVariants}
                  className="absolute left-0 top-[6.77%] z-10 w-[62%]"
                >
                  <AspectRatio.Root ratio={671 / 1011}>
                    <Image
                      src={"/images/features/credit-card-dark.png"}
                      width={671}
                      height={1011}
                      alt="Finzo credit card dark"
                      className="h-full w-full object-cover drop-shadow-sm"
                    />
                  </AspectRatio.Root>
                </motion.div>
                <motion.div
                  variants={whiteVisaCardVariants}
                  className="absolute right-0 top-[29.93%] z-20 w-[62%]"
                >
                  <AspectRatio.Root ratio={671 / 1011}>
                    <Image
                      src={"/images/features/credit-card-light.png"}
                      width={671}
                      height={1011}
                      alt="Finzo credit card light"
                      className="h-full w-full object-cover drop-shadow-md"
                    />
                  </AspectRatio.Root>
                </motion.div>
              </AspectRatio.Root>
            </motion.div>
          </motion.div>
          {/* Financial Insight */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "some" }}
            variants={cardAnimationParentVariants}
            className="row-span-4 grid grid-rows-subgrid gap-0 overflow-clip rounded-4xl bg-offwhite px-[var(--feature-padding)] pt-[var(--feature-padding)]"
          >
            <FeatureCardInfo
              heading="Personalized your Financial insights and goals"
              description="Track your sending patterns,analyze income or expenses easily, and recieve personalized recommendations to optimize your financial habits."
              Icon={LineChartIcon}
            />
            <div className="relative mt-5">
              <AspectRatio.Root ratio={538 / 451}>
                <motion.div
                  variants={financialStatsVariants}
                  className="absolute left-0 top-[6.77%] z-10 w-[83.83%]"
                >
                  <AspectRatio.Root ratio={902 / 896}>
                    <Image
                      src={"/images/features/stats.png"}
                      width={902}
                      height={896}
                      alt="Finzo stats"
                      className="h-full w-full object-cover drop-shadow-sm"
                    />
                  </AspectRatio.Root>
                </motion.div>
                <motion.div
                  variants={financialSavingsVariants}
                  className="absolute right-0 top-[19.29%] z-10 w-[43.457%] origin-bottom-left"
                >
                  <AspectRatio.Root ratio={468 / 461}>
                    <Image
                      src={"/images/features/savings.png"}
                      width={468}
                      height={896}
                      alt="Finzo savings"
                      className="h-full w-full object-cover drop-shadow-md"
                    />
                  </AspectRatio.Root>
                </motion.div>
              </AspectRatio.Root>
            </div>
          </motion.div>
        </div>
        {/* Free transfer */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: "some" }}
          variants={cardAnimationParentVariants}
          className="grid rounded-4xl bg-offwhite pl-[var(--feature-padding)] pt-[var(--feature-padding)] md:grid-cols-2 md:pb-[var(--feature-padding)]"
        >
          <div>
            <FeatureCardInfo
              heading="Free Transfer anywhere around the world"
              description="Create a custom card that reflects your uinque style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card."
              Icon={MoneySendIcon}
            />
          </div>
          <motion.div>
            <MotionImage
              variants={mapVariants}
              src={"/images/features/map.png"}
              width={634}
              height={380}
              alt="A map showing finzo finance is available world wide"
              className="-z-10 h-full object-cover object-left mix-blend-darken"
            />
          </motion.div>
        </motion.div>
        <div className="grid grid-rows-3 gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-none">
          {/* 30+ Currencies */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "some" }}
            variants={cardAnimationParentVariants}
            className="overflow-clip rounded-4xl bg-offwhite px-[var(--feature-padding)] pt-[var(--feature-padding)]"
          >
            <FeatureCardInfo
              heading="Hold money in 30+ currencies"
              Icon={MobileIcon}
            />
            <div className="relative mt-5">
              <AspectRatio.Root ratio={320.67 / 140.81}>
                <motion.div
                  variants={mapVariants}
                  className="absolute left-[-9.667%] top-[-78.96%] w-[142.3%]"
                >
                  <AspectRatio.Root ratio={497 / 408}>
                    <Image
                      src={"/images/features/currencies.png"}
                      width={497}
                      height={408}
                      alt="Finzo currencies"
                      className="w-full object-cover object-right"
                    />
                  </AspectRatio.Root>
                </motion.div>
              </AspectRatio.Root>
            </div>
          </motion.div>
          {/* Subscriptions */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "some" }}
            variants={cardAnimationParentVariants}
            className="overflow-clip rounded-4xl bg-offwhite px-[var(--feature-padding)] pt-[var(--feature-padding)]"
          >
            <FeatureCardInfo
              heading="Subscriptions you control in one place"
              Icon={ReceiptIcon}
            />
            <motion.div
              variants={whiteVisaCardVariants}
              className="relative bottom-[-8%] mt-5"
            >
              <div className="w-full">
                <Image
                  src={"/images/features/subscriptions.png"}
                  width={642}
                  height={264}
                  alt="Finzo currencies"
                  className="w-full object-cover object-right"
                />
              </div>
            </motion.div>
          </motion.div>
          {/* Checkout other products */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "some" }}
            variants={cardAnimationParentVariants}
            className="relative overflow-clip rounded-4xl bg-neutral-900 px-[var(--feature-padding)] pb-[var(--feature-padding)] pt-[var(--feature-padding)]"
          >
            <div className="xl: relative z-20 pt-[5.5rem] xl:pt-24">
              <motion.h3
                variants={slideVariants}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="relative z-10 mb-8 text-3xl font-medium text-white xl:text-4xl"
              >
                Check our other product features
              </motion.h3>
              <MotionButton
                variants={slideVariants}
                className="w-full sm:w-max"
                transition={{ duration: 0.3, ease: "backOut" }}
              >
                View More <Arrow className="size-7" />
              </MotionButton>
            </div>
            <motion.div
              variants={mapVariants}
              className="absolute left-[-18.7%] top-[11.1%] z-0 w-[146.42%]"
            >
              <AspectRatio.Root ratio={601.3 / 424.83}>
                <FinzoIcon className="h-full w-full object-fill text-white/5" />
              </AspectRatio.Root>
            </motion.div>
          </motion.div>
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
      <motion.div
        variants={slideVariants}
        className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary lg:mb-8 lg:size-16"
        transition={{ duration: 0.3, ease: "backOut" }}
      >
        <Icon className="size-8 lg:size-9" />
      </motion.div>
      <motion.h3
        variants={slideVariants}
        className="relative z-10 max-w-md text-balance text-3xl font-medium xl:text-4xl"
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        {heading}
      </motion.h3>
      {description && (
        <motion.p
          variants={slideVariants}
          className="relative z-10 pt-3 text-lg text-gray-500 md:pt-4 lg:pt-5 lg:text-xl xl:text-2xl"
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          {description}
        </motion.p>
      )}
    </>
  );
};
