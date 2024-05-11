import { Button } from "../button";
import { Logo } from "../icons";

const navLinks = [
  { text: "Products" },
  { text: "Company" },
  { text: "Features" },
  { text: "Pricing" },
  { text: "Features" },
];

const DesktopNavbar = () => {
  return (
    <div className="hidden h-full lg:flex flex-row items-center lg:justify-between">
      <Logo className="hidden lg:inline-block" />
      <ul className="hidden lg:flex  items-center justify-between">
        {navLinks.map((link) => {
          return (
            <li key={link.text}>
              <a href="#" className="text-sm font-bold px-4 py-2.5">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4">
        <Button variant={"ghost"}>Login</Button>
        <Button variant={"dark"}>Open Account</Button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
