"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, type Variants, motion } from "framer-motion";
import { useClickOutside } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../button";
import { GithubIcon, Logo } from "../icons";
import { githubLink } from "@/lib/static-data";

const MotionButton = motion.create(Button);

const navLinks = [
  { text: "Products" },
  { text: "Company" },
  { text: "Features" },
  { text: "Pricing" },
];

const slideVariants: Variants = {
  initial: {
    y: -40,
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "backInOut",
    },
  },
};

const navMenuVariants: Variants = {
  initial: {
    // y: -40,
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    // y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "backInOut",
      staggerChildren: 0.2,
    },
  },
};

const navItemVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useClickOutside(() => setIsMenuOpen(false), ["mousedown"]);

  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: "some", once: true }}
      className="flex h-full items-center lg:hidden"
    >
      <div className="relative flex w-full origin-top items-center justify-between">
        <Logo className="" />
        <Button
          size={"icon"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          variant={isMenuOpen ? "outline" : "ghost"}
        >
          {!isMenuOpen && <Bars2Icon className="size-8" />}
          {isMenuOpen && <XMarkIcon className="size-8" />}
        </Button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="initial"
              variants={navMenuVariants}
              ref={ref}
              className="absolute right-0 top-full z-50 w-full origin-top-right translate-y-1 rounded-2xl border-2 border-neutral-100 bg-white/95 px-3 pb-6 pt-4 backdrop-blur-md sm:max-w-xs"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  return (
                    <motion.li variants={navItemVariants} key={link.text}>
                      <Link
                        href="#"
                        className="inline-block px-5 py-1 text-sm font-bold"
                      >
                        {link.text}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mb-6 mt-4 h-px w-full bg-neutral-100"></div>
              <div className="flex flex-col gap-2">
                <MotionButton variants={navItemVariants} variant={"outline"}>
                  Login
                </MotionButton>
                <MotionButton
                  variants={navItemVariants}
                  variant={"dark"}
                  asChild
                >
                  <Link href={githubLink}>
                    <GithubIcon className="size-5" /> Github
                  </Link>
                </MotionButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
export default MobileNavbar;
