"use client";

import { cn } from "@/lib/utils";
import { TestimonialClientData } from "@/lib/validation/testimonial";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SplitWords } from "../animations/split-text";
import { Button } from "../button";
import { Paragraph, SecondHeading, Section } from "../common";
import { Arrow } from "../icons";

const MotionParagraph = motion.create(Paragraph);

const headingAnimationParentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
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

const testimonialParentVariants: Variants = {
  initial: {},
  animate: {},
};
const testimonialContentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants: Variants = {
  initial: {
    x: -25,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const TestimonialsClient = ({
  testimonials,
  totalUsersInMillions,
}: {
  testimonials: TestimonialClientData[];
  totalUsersInMillions: number;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials.at(activeIndex)!;
  return (
    <Section>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: "some" }}
        variants={headingAnimationParentVariants}
        className="grid-cols-2 lg:grid"
      >
        <SecondHeading className="col-start-2 col-end-2 max-w-[45rem] text-wrap lg:mx-0 lg:text-left">
          <SplitWords
            variants={slideVariants}
          >{`Join ${totalUsersInMillions}+ million people who already trust us with their money`}</SplitWords>
        </SecondHeading>
      </motion.div>
      <div className="relative [--padding:2rem] md:[--padding:3rem] lg:[--padding:4rem]">
        <div>
          <motion.div
            key={activeIndex}
            initial="initial"
            animate="animate"
            variants={testimonialParentVariants}
            className={`grid rounded-4xl bg-offwhite md:grid-cols-2`}
          >
            <div className="pt-[var(--padding)] md:pt-0">
              <div className="relative h-64 w-full md:h-full">
                <motion.div
                  variants={imageVariants}
                  className="absolute bottom-0 h-full w-full md:h-96 lg:h-[32rem]"
                  transition={{ duration: 0.6, ease: "backInOut" }}
                >
                  <Image
                    src={activeTestimonial.image.url}
                    alt={
                      activeTestimonial.image.alt
                        ? activeTestimonial.image.alt
                        : `Picture of testifier ${activeTestimonial.name}`
                    }
                    width={activeTestimonial.image.width}
                    height={activeTestimonial.image.height}
                    className="h-full w-full object-scale-down object-bottom"
                  />
                </motion.div>
              </div>
            </div>
            <div className="w-full px-[var(--padding)] md:hidden">
              <div className="h-px w-full bg-neutral-200"></div>
            </div>
            <motion.div
              variants={testimonialContentVariants}
              className="pb-[4rem] pl-[var(--padding)] pr-[var(--padding)] pt-[var(--padding)] md:pb-[var(--padding)] md:pl-0"
            >
              <MotionParagraph
                variants={slideVariants}
                className="mb-6 line-clamp-5 min-h-[5lh] text-lg md:mb-8"
                transition={{ duration: 0.6, ease: "backOut" }}
              >
                {activeTestimonial.testimony}
              </MotionParagraph>
              <div>
                <motion.p
                  variants={slideVariants}
                  className="mb-1 text-3xl font-medium lg:text-4xl"
                  transition={{ duration: 0.4, ease: "backOut" }}
                >
                  {activeTestimonial.name}
                </motion.p>
                <motion.p
                  variants={slideVariants}
                  className="text-xl text-neutral-500"
                  transition={{ duration: 0.4, ease: "backOut" }}
                >
                  {activeTestimonial.profession}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-[var(--padding)] right-[var(--padding)] flex gap-2 lg:gap-4">
          <Button
            aria-label="go-left"
            onClick={() => {
              setActiveIndex((curr) => {
                if (curr === 0) return curr;
                return curr - 1;
              });
            }}
            disabled={activeIndex === 0}
            variant={"outline"}
            size={"icon"}
            className="size-10 border-neutral-200 hover:bg-neutral-200 disabled:hover:bg-transparent lg:size-12"
          >
            <Arrow className="rotate-180" />
          </Button>
          <Button
            aria-label="go-right"
            onClick={() => {
              setActiveIndex((curr) => {
                if (curr === testimonials.length - 1) return curr;
                return curr + 1;
              });
            }}
            variant={"outline"}
            size={"icon"}
            disabled={activeIndex === testimonials.length - 1}
            className="size-10 border-neutral-200 hover:bg-neutral-200 disabled:hover:bg-transparent lg:size-12"
          >
            <Arrow />
          </Button>
        </div>
        <div
          className={
            "absolute bottom-3 left-[var(--padding)] right-auto grid h-4 w-[calc(50%-var(--padding))] gap-x-2.5 md:bottom-4 md:left-auto md:right-[var(--padding)] lg:bottom-6"
          }
          style={{
            gridTemplateColumns: `repeat(${testimonials.length}, min(${100 / testimonials.length}%, 3rem))`,
          }}
        >
          {testimonials.map((_, i) => {
            return (
              <button
                aria-label={`set active ${i}`}
                key={i}
                className={cn("relative h-full w-full")}
                disabled={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              >
                <span className="absolute left-0 top-[5px] z-10 inline-block h-1.5 w-full rounded-md bg-neutral-200"></span>
                {activeIndex === i && (
                  <motion.span
                    layoutId="indicator"
                    className="absolute left-0 top-[5px] z-20 inline-block h-1.5 w-full rounded-md bg-neutral-300"
                  ></motion.span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
export default TestimonialsClient;
