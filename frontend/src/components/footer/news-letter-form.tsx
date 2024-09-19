"use client";

import type { NewsletterSubscribeActionType } from "@/lib/types/common";
import { cn } from "@/lib/utils";
import { newsletterSubscribeSchema } from "@/lib/validation/news-letter";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "../button";
import { SecondHeading } from "../common";
import { CheckIcon, MailInboxIcon, SpinnerIcon } from "../icons";

const MotionSecondHeading = motion.create(SecondHeading);
const MotionButton = motion.create(Button);

const contentParentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideFromRightVariants: Variants = {
  initial: {
    x: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const NewsLetterForm = ({
  newsletterSubscribeAction,
}: {
  newsletterSubscribeAction: NewsletterSubscribeActionType;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = newsletterSubscribeSchema.safeParse(data);
    if (!parsed.success) {
      setIsLoading(false);
      setError("Please enter a valid email!");
      return;
    }

    const res = await newsletterSubscribeAction(parsed.data);
    if (res.error) {
      setIsLoading(false);
      setError(res.error);
      return;
    }

    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <div className="grid gap-x-16 gap-y-16 lg:grid-cols-2">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: "some" }}
        variants={contentParentVariants}
      >
        <motion.div
          variants={slideFromRightVariants}
          className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary sm:mb-6 sm:size-16 md:mb-8 lg:size-18"
        >
          <MailInboxIcon className="size-7 md:size-8 lg:size-10" />
        </motion.div>
        <MotionSecondHeading
          variants={slideFromRightVariants}
          className="mx-0 mb-5 text-left text-white md:max-w-md"
        >
          Keep up with the latest
        </MotionSecondHeading>
        <motion.p
          variants={slideFromRightVariants}
          className="text-base font-bold text-neutral-400"
        >
          Join our newsletter to stay upto date on features and releases.
        </motion.p>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: "some" }}
        variants={contentParentVariants}
        className="w-full max-w-105 lg:ml-auto lg:pt-[6.5rem]"
      >
        <div className="grid gap-6">
          <motion.p
            variants={slideFromRightVariants}
            className="font-medium text-white"
          >
            Stay up to date
          </motion.p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-rows-2 gap-4 sm:grid-cols-[1fr_auto] sm:grid-rows-none">
              <motion.input
                variants={slideFromRightVariants}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="min-w-0 rounded-full border-none bg-neutral-700 px-6 py-4 font-medium text-white outline-none ring-0 placeholder:text-neutral-50 focus:ring-2 focus:ring-neutral-200"
              />
              <MotionButton
                variants={slideFromRightVariants}
                type="submit"
                disabled={isLoading || isSuccess}
                className={cn(
                  isSuccess &&
                    "bg-emerald-400 disabled:opacity-100 disabled:hover:bg-emerald-400",
                )}
              >
                {!isLoading && !isSuccess && `Subscribe`}
                {!isLoading && isSuccess && (
                  <>
                    <CheckIcon className="size-5" /> Subscribed
                  </>
                )}
                {isLoading && (
                  <>
                    <SpinnerIcon className="size-5 animate-spin" /> Loading
                  </>
                )}
              </MotionButton>
              {error && <p className="text-rose-400 sm:col-span-2">{error}</p>}
            </div>
          </form>
          <motion.p
            variants={slideFromRightVariants}
            className="font-medium text-neutral-400"
          >
            By subscribing you agree to our{" "}
            <Link
              href={"#"}
              className="text-nowrap text-neutral-200 underline transition-colors duration-100 hover:text-white"
            >
              Privacy Policy
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};
export default NewsLetterForm;
