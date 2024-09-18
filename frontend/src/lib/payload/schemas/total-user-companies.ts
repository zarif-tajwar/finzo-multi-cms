import type { GlobalConfig } from "payload/types";

export const TotalUserCompanies: GlobalConfig = {
  slug: "total-user-companies",
  fields: [
    {
      name: "value",
      type: "number",
      label: "Total number of companies that use finzo",
    },
  ],
};
