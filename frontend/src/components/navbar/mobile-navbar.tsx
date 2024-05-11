"use client";

import { Logo } from "../icons";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { Button } from "../button";
import { useClickOutside } from "@mantine/hooks";

const navLinks = [
  { text: "Products" },
  { text: "Company" },
  { text: "Features" },
  { text: "Pricing" },
  { text: "Features" },
];

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const ref = useClickOutside(
    () => setIsMenuOpen(false),
    ["mousedown"],
    [buttonRef.current]
  );

  return (
    <div className="h-full lg:hidden flex items-center">
      <div className="flex relative w-full items-center justify-between">
        <Logo className="" />
        <Button
          ref={buttonRef}
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
            className="absolute z-50 top-full translate-y-1 bg-white/70 backdrop-blur-sm pt-4 pb-6 px-3 w-full sm:max-w-xs right-0 border-2 border-neutral-100 rounded-2xl"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                return (
                  <li key={link.text}>
                    <a
                      href="#"
                      className="text-sm font-bold px-5 py-1 inline-block"
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="h-px w-full bg-neutral-100 mt-4 mb-6"></div>
            <div className="flex gap-2 flex-col">
              <Button variant={"outline"}>Login</Button>
              <Button variant={"dark"}>Open Account</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MobileNavbar;
