import { Container, SecondHeading } from "../common";
import { MailInboxIcon } from "../icons";
import NewsLetterForm from "./news-letter-form";

const Footer = () => {
  return (
    <Container>
      <footer className="rounded-4xl bg-neutral-900 p-20">
        <div className="grid grid-cols-2 items-center">
          <div>
            <div className="mb-8 flex size-18 items-center justify-center rounded-full bg-primary">
              <MailInboxIcon className="size-10" />
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
      </footer>
    </Container>
  );
};
export default Footer;
