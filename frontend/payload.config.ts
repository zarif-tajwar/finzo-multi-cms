import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
import { fileURLToPath } from "url";

import { Users } from "@/lib/payload/schemas/Users";
import { MediaCollection } from "@/lib/payload/schemas/media";
import { NewsletterSubscribedEmailsCollection } from "@/lib/payload/schemas/newsletter-subscribed-emails";
import { testimonialCollection } from "@/lib/payload/schemas/testimonials";
import { TotalUserCompanies } from "@/lib/payload/schemas/total-user-companies";
import { TotalUsersInMillions } from "@/lib/payload/schemas/total-users-in-millions";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    livePreview: {
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 400, height: 680 },
      ],
    },
  },
  collections: [
    Users,
    testimonialCollection,
    MediaCollection,
    NewsletterSubscribedEmailsCollection,
  ],
  globals: [TotalUsersInMillions, TotalUserCompanies],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
    declare: {
      ignoreTSError: true,
    },
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.PAYLOAD_DATABASE_URI || "",
    },
  }),
  routes: {
    admin: "/payload-admin/admin",
    api: "/payload-admin/api",
    graphQLPlayground: "/payload-admin/graphql-playground",
  },
});
