import { newsletterSubscribeAction } from "@/lib/actions/actions-contentful";
import {
  getTestimonials,
  getTotalUserCompanies,
  getTotalUsersInMillions,
} from "@/lib/server/fetcher-contentful";
import { SetupPage } from "../_common/setup-page";
import { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Finzo Finance on Contentful",
};

export default function ContentfulPage() {
  return (
    <SetupPage
      getTestimonials={getTestimonials}
      getTotalUserCompanies={getTotalUserCompanies}
      getTotalUsersInMillions={getTotalUsersInMillions}
      newsletterSubscribeAction={newsletterSubscribeAction}
    />
  );
}
