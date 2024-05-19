import React from "react";
import { Logo } from "../icons";
import Link from "next/link";

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

const FooterMenu = () => {
  return (
    <div className="flex flex-col gap-x-12 gap-y-10 xl:flex-row">
      <div className="max-w-56">
        <Logo className="w-full text-white" />
        <p className="pt-3 leading-tight text-neutral-500">
          Make your complicated finance more simple
        </p>
      </div>
      <nav className="flex-1">
        <ul className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:flex lg:justify-between">
          {footerLinks.map((footerLink) => {
            return (
              <li key={footerLink.heading}>
                <h4 className="mb-3 font-medium text-white">
                  {footerLink.heading}
                </h4>
                <ul className="space-y-2 text-sm font-medium text-neutral-500">
                  {footerLink.links.map((link) => {
                    return (
                      <li key={link.text}>
                        <Link href={link.text}>{link.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default FooterMenu;
