"use client";

import { type Variants, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../button";
import { GithubIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { githubLink } from "@/lib/static-data";

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

const navLinks = [
  { text: "Sanity", href: "/sanity" },
  { text: "Contentful", href: "/contentful" },
  { text: "Strapi", href: "/strapi" },
  { text: "Payload", href: "/payload" },
];

const DesktopNavbar = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: "some", once: true }}
      className="relative hidden h-full origin-top flex-row items-center lg:flex lg:justify-between"
    >
      <Logo className="hidden lg:inline-block" />
      <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-between lg:flex">
        {navLinks.map((link) => {
          return (
            <li key={link.text}>
              <Link href={link.href} className="px-4 py-2.5 text-sm font-bold">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4">
        <Button variant={"ghost"}>Login</Button>
        <Button variant={"dark"} asChild>
          <Link href={githubLink}>
            <GithubIcon className="size-5" /> Github
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default DesktopNavbar;
