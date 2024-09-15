import { companies } from "@/lib/static-data";
import type { GetTotalUserCompaniesType } from "@/lib/types/common";
import Image from "next/image";
import { Paragraph, SecondHeading, Section } from "../common";

const UserCompanies = async ({
  getTotalUserCompanies,
}: {
  getTotalUserCompanies: GetTotalUserCompaniesType;
}) => {
  const totalUserCompanies = await getTotalUserCompanies();
  if (totalUserCompanies === undefined) return null;
  return (
    <Section>
      <div className="flex flex-col items-center">
        <SecondHeading>
          {`${totalUserCompanies}+ The fastest growing company use Finzo`}
        </SecondHeading>
        <Paragraph className="mb-9 max-w-sm text-center lg:max-w-md">
          Many companies have tried using Finzo and they trust the safety of
          their money
        </Paragraph>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {companies.map((company) => {
          return (
            <div
              key={company.company}
              className="flex items-center justify-center rounded-2xl bg-offwhite px-2 py-6 sm:px-4 sm:py-8 md:rounded-3xl lg:py-12"
            >
              <div className="relative h-6 w-full sm:h-7 lg:h-9">
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
