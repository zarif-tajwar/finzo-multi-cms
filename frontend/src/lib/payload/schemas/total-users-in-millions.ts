import type { GlobalConfig } from "payload/types";

export const TotalUsersInMillions: GlobalConfig = {
  slug: "total-users-in-millions",
  fields: [
    {
      name: "value",
      type: "number",
      label: "Total number of users in millions",
    },
  ],
};
