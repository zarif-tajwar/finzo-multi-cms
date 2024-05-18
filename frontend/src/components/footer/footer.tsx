import { Button } from "../button";
import { Container, SecondHeading } from "../common";
import { GithubIcon, LinkedinIcon, MailInboxIcon, XIcon } from "../icons";
import FooterMenu from "./footer-menu";
import NewsLetterForm from "./news-letter-form";

const socialMediaLinks = [
  {
    name: "Github",
    href: "https://github.com/zarif-tajwar/finzo-next-cms/tree/strapi",
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

const Footer = () => {
  return (
    <Container>
      <footer>
        <div className="rounded-4xl bg-neutral-900 p-6 md:p-10 lg:p-16 xl:p-20">
          <div className="grid gap-x-16 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary sm:mb-6 sm:size-16 md:mb-8 lg:size-18">
                <MailInboxIcon className="size-7 md:size-8 lg:size-10" />
              </div>
              <SecondHeading className="mx-0 mb-5 text-left text-white md:max-w-md">
                Keep up with the latest
              </SecondHeading>
              <p className="text-base font-bold text-neutral-400">
                Join our newsletter to stay upto date on features and releases.
              </p>
            </div>
            <NewsLetterForm />
          </div>
          <div className="my-20 h-0.5 w-full bg-neutral-700"></div>
          <FooterMenu />
        </div>
        <div className="flex justify-between gap-8 py-9">
          <p>© 2024 Finzo. All Right Reserved</p>
          <div className="flex items-center gap-2">
            {socialMediaLinks.map((link) => {
              return (
                <Button key={link.name} size={"icon"} className="size-11">
                  {<link.Icon />}
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
