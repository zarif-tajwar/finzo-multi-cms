import { newsletterSubscribeAction } from "@/lib/actions/actions-sanity";
import {
  getTestimonials,
  getTotalUserCompanies,
  getTotalUsersInMillions,
} from "@/lib/server/fetcher-sanity";
import { SetupPage } from "../_common/setup-page";
import { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Finzo Finance on Sanity",
};

export default function SanityPage() {
  return (
    <SetupPage
      getTestimonials={getTestimonials}
      getTotalUserCompanies={getTotalUserCompanies}
      getTotalUsersInMillions={getTotalUsersInMillions}
      newsletterSubscribeAction={newsletterSubscribeAction}
    />
  );
}
