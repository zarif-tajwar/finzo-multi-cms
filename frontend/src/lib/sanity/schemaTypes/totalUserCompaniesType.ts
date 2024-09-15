import { defineField, defineType } from "sanity";

export const totalUserCompaniesType = defineType({
  name: "totalUserCompanies",
  title: "Total User Companies",
  type: "document",
  fields: [defineField({ name: "value", type: "number" })],
});
