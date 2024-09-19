import type { GetTotalUserCompaniesType } from "@/lib/types/common";
import UserCompaniesClient from "./user-companies-client";

const UserCompanies = async ({
  getTotalUserCompanies,
}: {
  getTotalUserCompanies: GetTotalUserCompaniesType;
}) => {
  const totalUserCompanies = await getTotalUserCompanies();
  if (totalUserCompanies === undefined) return null;
  return <UserCompaniesClient totalUserCompanies={totalUserCompanies} />;
};
export default UserCompanies;
