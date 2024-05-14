"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../button";
import { Paragraph, SecondHeading, Section } from "../common";
import { Arrow } from "../icons";
import { TestimonialClientData } from "@/lib/validation/testimonial";

const TestimonialsClient = ({
  testimonials,
}: {
  testimonials: TestimonialClientData[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Section>
      <div className="grid-cols-2 lg:grid">
        <SecondHeading className="col-start-2 col-end-2 max-w-[45rem] text-wrap lg:mx-0 lg:text-left">
          Join 15+ million people who already trust us with their money
        </SecondHeading>
      </div>
      <div className="relative [--padding:2rem] md:[--padding:3rem] lg:[--padding:4rem]">
        <div>
          {testimonials.map((data, i) => {
            return (
              <div
                key={i}
                className={`grid rounded-4xl bg-offwhite md:grid-cols-2 ${i === activeIndex ? "block" : "hidden"}`}
              >
                <div className="pt-[var(--padding)] md:pt-0">
                  <div className="relative h-64 w-full md:h-full">
                    <div className="absolute bottom-0 h-full w-full md:h-96 lg:h-[32rem]">
                      <Image
                        src={data.image.url}
                        alt={
                          data.image.alt
                            ? data.image.alt
                            : `Picture of testifier ${data.name}`
                        }
                        width={data.image.width}
                        height={data.image.height}
                        className="h-full w-full object-scale-down object-bottom"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-[var(--padding)] md:hidden">
                  <div className="h-px w-full bg-neutral-200"></div>
                </div>
                <div className="pb-[4rem] pl-[var(--padding)] pr-[var(--padding)] pt-[var(--padding)] md:pb-[var(--padding)] md:pl-0">
                  <Paragraph className="mb-6 line-clamp-5 min-h-[5lh] text-lg md:mb-8">
                    {data.testimony}
                  </Paragraph>
                  <div className="">
                    <p className="mb-1 text-3xl font-medium lg:text-4xl">
                      {data.name}
                    </p>
                    <p className="text-xl text-neutral-500">
                      {data.profession}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-[var(--padding)] right-[var(--padding)] flex gap-2 lg:gap-4">
          <Button
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
                key={i}
                className={cn(
                  "relative h-full before:absolute before:left-0 before:top-1/2 before:h-1.5 before:w-full before:-translate-y-1/2 before:rounded-md before:bg-neutral-200 before:transition-colors before:duration-100 hover:before:bg-neutral-300",
                  i === activeIndex &&
                    "before:bg-neutral-500 hover:before:bg-neutral-500",
                )}
                disabled={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              ></button>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
export default TestimonialsClient;
