import Image from "next/image";
import { Paragraph, SecondHeading, Section } from "../common";

const companies = [
  {
    loc: "/images/companies/airtable-logo.png",
    company: "Airtable",
  },
  {
    loc: "/images/companies/discord-logo.png",
    company: "Discord",
  },
  {
    loc: "/images/companies/dropbox-logo.png",
    company: "Dropbox",
  },
  {
    loc: "/images/companies/monday-logo.png",
    company: "Monday",
  },
  {
    loc: "/images/companies/pinterest-logo.png",
    company: "Pinterest",
  },
  {
    loc: "/images/companies/slack-logo.png",
    company: "Slack",
  },
  {
    loc: "/images/companies/stripe-logo.png",
    company: "Stripe",
  },
  {
    loc: "/images/companies/zoom-logo.png",
    company: "Zoom",
  },
];

const UserCompanies = () => {
  return (
    <Section>
      <div className="flex flex-col items-center">
        <SecondHeading>
          200+ The fastest growing company use Finzo
        </SecondHeading>
        <Paragraph className="mb-9 max-w-[574px] text-center">
          Many companies have tried using Finzo and they trust the safety of
          their money
        </Paragraph>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {companies.map((company) => {
          return (
            <div
              key={company.company}
              className="flex items-center justify-center rounded-3xl bg-offwhite px-16 py-12"
            >
              <div className="relative h-9 w-full">
                <Image
                  src={company.loc}
                  alt={`Logo of ${company.company}`}
                  fill
                  className="object-scale-down"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
export default UserCompanies;
