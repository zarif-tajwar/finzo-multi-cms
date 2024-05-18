import Link from "next/link";
import { Button } from "../button";
import { GithubIcon, Logo } from "../icons";

const navLinks = [
  { text: "Products" },
  { text: "Company" },
  { text: "Features" },
  { text: "Pricing" },
  { text: "Features" },
];

const DesktopNavbar = () => {
  return (
    <div className="hidden h-full flex-row items-center lg:flex lg:justify-between">
      <Logo className="hidden lg:inline-block" />
      <ul className="hidden items-center  justify-between lg:flex">
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
          <Link
            href={"https://github.com/zarif-tajwar/finzo-next-cms/tree/strapi"}
          >
            <GithubIcon className="size-5" /> Github
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
