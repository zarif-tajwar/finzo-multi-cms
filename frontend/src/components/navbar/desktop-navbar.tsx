import Link from "next/link";
import { Button } from "../button";
import { GithubIcon, Logo } from "../icons";
import { githubLink } from "@/lib/static-data";

const navLinks = [
  { text: "Products" },
  { text: "Company" },
  { text: "Features" },
  { text: "Pricing" },
];

const DesktopNavbar = () => {
  return (
    <div className="relative hidden h-full flex-row items-center lg:flex lg:justify-between">
      <Logo className="hidden lg:inline-block" />
      <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-between lg:flex">
        {navLinks.map((link) => {
          return (
            <li key={link.text}>
              <Link href="#" className="px-4 py-2.5 text-sm font-bold">
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
    </div>
  );
};

export default DesktopNavbar;
