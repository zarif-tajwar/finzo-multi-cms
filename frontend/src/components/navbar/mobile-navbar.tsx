"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useClickOutside } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../button";
import { GithubIcon, Logo } from "../icons";

const navLinks = [
  { text: "Products" },
  { text: "Company" },
  { text: "Features" },
  { text: "Pricing" },
  { text: "Features" },
];

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useClickOutside(() => setIsMenuOpen(false), ["mousedown"]);

  return (
    <div className="flex h-full items-center lg:hidden">
      <div className="relative flex w-full items-center justify-between">
        <Logo className="" />
        <Button
          size={"icon"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          variant={isMenuOpen ? "outline" : "ghost"}
        >
          {!isMenuOpen && <Bars2Icon className="size-8" />}
          {isMenuOpen && <XMarkIcon className="size-8" />}
        </Button>
        {isMenuOpen && (
          <div
            ref={ref}
            className="absolute right-0 top-full z-50 w-full translate-y-1 rounded-2xl border-2 border-neutral-100 bg-white/95 px-3 pb-6 pt-4 backdrop-blur-md sm:max-w-xs"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                return (
                  <li key={link.text}>
                    <Link
                      href="#"
                      className="inline-block px-5 py-1 text-sm font-bold"
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mb-6 mt-4 h-px w-full bg-neutral-100"></div>
            <div className="flex flex-col gap-2">
              <Button variant={"outline"}>Login</Button>
              <Button variant={"dark"} asChild>
                <Link href={"https://github.com/zarif-tajwar/finzo-next-cms"}>
                  <GithubIcon className="size-5" /> Github
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MobileNavbar;
