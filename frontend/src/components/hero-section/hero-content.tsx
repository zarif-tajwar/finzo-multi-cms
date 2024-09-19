"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { SplitWords } from "../animations/split-text";
import { Button } from "../button";

const avatars = [
  { loc: "/images/hero/avatar1.png", bg: "bg-orange-200" },
  { loc: "/images/hero/avatar2.png", bg: "bg-violet-200" },
  { loc: "/images/hero/avatar3.png", bg: "bg-emerald-200" },
];

const heroAnimationParent: Variants = {
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

export const HeroContent = ({
  totalUsersInMillions,
}: {
  totalUsersInMillions: number;
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: "some" }}
      variants={heroAnimationParent}
      className="flex flex-col items-center pt-0 lg:block lg:max-w-[32.625rem]"
    >
      <h1 className="mb-6 text-center text-5xl font-bold tracking-tight sm:text-6xl sm:font-medium md:text-7xl lg:text-left xl:text-8xl">
        <SplitWords variants={slideVariants}>
          Control your financial future easily
        </SplitWords>
      </h1>
      <motion.p
        variants={slideVariants}
        className="mb-16 max-w-screen-sm text-center text-gray-500 md:text-xl lg:text-left lg:text-2xl"
      >
        {`From easy money management, to financial goals and investments. Open your account in a Flash!`}
      </motion.p>
      <div className="mb-16 grid w-full gap-x-5 gap-y-2 sm:flex sm:w-auto sm:flex-row lg:mb-8">
        <Button asChild>
          <motion.button variants={slideVariants}>Open Account</motion.button>
        </Button>
        <Button variant={"outline"} asChild>
          <motion.button variants={slideVariants}>
            Generate your card
          </motion.button>
        </Button>
      </div>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <motion.div variants={slideVariants} className="flex">
          {avatars.map((avatar, i) => {
            return (
              <div
                key={i}
                className={`relative -ml-2 size-10 overflow-clip rounded-full first:ml-0 sm:size-12 ${avatar.bg}`}
              >
                <Image
                  src={avatar.loc}
                  fill
                  className="h-full w-full object-cover"
                  alt={`Avatar ${i}`}
                />
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={slideVariants}
          className="flex flex-col items-center text-center lg:items-stretch lg:text-left"
        >
          <div className="flex items-center gap-x-2">
            <span className="inline-flex h-8 w-8 items-center justify-center">
              <svg
                width="20"
                height="11"
                viewBox="0 0 20 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9064 8.13999L14.6264 3.85999L12.0131 1.23332C10.9064 0.126654 9.10644 0.126654 7.99977 1.23332L1.0931 8.13999C0.186436 9.04665 0.839769 10.5933 2.10644 10.5933H9.58643H17.8931C19.1731 10.5933 19.8131 9.04665 18.9064 8.13999Z"
                  fill="#A6F4C5"
                ></path>
              </svg>
            </span>
            <p className="text-2xl font-medium md:text-3xl">
              {totalUsersInMillions} Million+ Users
            </p>
          </div>
          <p className="col-span-2 max-w-96 text-neutral-500">
            Trusted by million of satisfied users, our financial services have
            made a real impact on people’s lives
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
