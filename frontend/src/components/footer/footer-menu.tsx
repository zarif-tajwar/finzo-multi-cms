"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/logo";
import LandingPageReminder from "../landing-page-reminder";

const footerLinks = [
  {
    heading: "Finzo",
    links: [
      {
        text: "Payment",
        href: "#",
      },
      {
        text: "Card",
        href: "#",
      },
      {
        text: "Pricing",
        href: "#",
      },
    ],
  },
  {
    heading: "Products",
    links: [
      {
        text: "Personal",
        href: "#",
      },
      {
        text: "Business",
        href: "#",
      },
      {
        text: "Invoices",
        href: "#",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      {
        text: "About",
        href: "#",
      },
      {
        text: "Careers",
        href: "#",
      },
      {
        text: "Press Kit",
        href: "#",
      },
    ],
  },
  {
    heading: "Developer",
    links: [
      {
        text: "API Documentation",
        href: "#",
      },
      {
        text: "Guide",
        href: "#",
      },
      {
        text: "Change Log",
        href: "#",
      },
    ],
  },
  {
    heading: "Community",
    links: [
      {
        text: "Refer a Friend",
        href: "#",
      },
      {
        text: "Gift",
        href: "#",
      },
    ],
  },
  {
    heading: "Support",
    links: [
      {
        text: "Help",
        href: "#",
      },
      {
        text: "FAQ",
        href: "#",
      },
      {
        text: "Contact",
        href: "#",
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      {
        text: "Privacy Policy",
        href: "#",
      },
      {
        text: "Terms of Services",
        href: "#",
      },
      {
        text: "Cookies",
        href: "#",
      },
    ],
  },
];

const contentParentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
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

const FooterMenu = () => {
  return (
    <div className="flex flex-col gap-x-12 gap-y-10">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: "some" }}
        variants={contentParentVariants}
        className="max-w-56"
      >
        <motion.span className="inline-block" variants={slideVariants}>
          <Logo className="text-white" />
        </motion.span>
        <motion.p
          variants={slideVariants}
          className="pt-3 leading-tight text-neutral-500"
        >
          Make your complicated finance more simple
        </motion.p>
      </motion.div>
      <nav className="flex-1">
        <motion.ul
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: "some" }}
          variants={contentParentVariants}
          className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:flex lg:justify-between"
        >
          {footerLinks.map((footerLink) => {
            return (
              <motion.li key={footerLink.heading}>
                <motion.h4
                  variants={slideVariants}
                  className="mb-3 font-medium text-white"
                >
                  {footerLink.heading}
                </motion.h4>
                <motion.ul
                  variants={slideVariants}
                  className="space-y-2 text-sm font-medium text-neutral-500"
                >
                  {footerLink.links.map((link) => {
                    return (
                      <li key={link.text}>
                        <LandingPageReminder>
                          <Link href="#" scroll={false}>
                            {link.text}
                          </Link>
                        </LandingPageReminder>
                      </li>
                    );
                  })}
                </motion.ul>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </div>
  );
};

export default FooterMenu;
