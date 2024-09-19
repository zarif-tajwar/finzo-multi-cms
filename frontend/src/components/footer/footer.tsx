import { githubLink } from "@/lib/static-data";
import type { NewsletterSubscribeActionType } from "@/lib/types/common";
import Link from "next/link";
import { Button } from "../button";
import { Container } from "../common";
import { GithubIcon, LinkedinIcon, XIcon } from "../icons";
import FooterMenu from "./footer-menu";
import NewsLetterForm from "./news-letter-form";

const socialMediaLinks = [
  {
    name: "Github",
    href: githubLink,
    Icon: GithubIcon,
  },
  {
    name: "X",
    href: "#",
    Icon: XIcon,
  },
  {
    name: "Linkedin",
    href: "#",
    Icon: LinkedinIcon,
  },
];

const Footer = ({
  newsletterSubscribeAction,
}: {
  newsletterSubscribeAction: NewsletterSubscribeActionType;
}) => {
  return (
    <Container>
      <footer>
        <div className="rounded-4xl bg-neutral-900 p-6 md:p-10 lg:p-16 xl:p-20">
          <NewsLetterForm
            newsletterSubscribeAction={newsletterSubscribeAction}
          />
          <div className="my-20 h-0.5 w-full bg-neutral-700"></div>
          <FooterMenu />
        </div>
        <div className="flex justify-between gap-8 py-9">
          <p>© 2024 Finzo. All Right Reserved</p>
          <div className="flex items-center gap-2">
            {socialMediaLinks.map((link) => {
              return (
                <Button
                  key={link.name}
                  asChild
                  size={"icon"}
                  className="size-11"
                >
                  <Link href={link.href} target="_blank">
                    {<link.Icon />}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </footer>
    </Container>
  );
};
export default Footer;
