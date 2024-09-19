import { newsletterSubscribeAction } from "@/lib/actions/actions-strapi";
import {
  getTestimonials,
  getTotalUserCompanies,
  getTotalUsersInMillions,
} from "@/lib/server/fetcher-strapi";
import { SetupPage } from "../_common/setup-page";
import { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Finzo Finance on Strapi",
};

export default function StrapiPage() {
  return (
    <SetupPage
      getTestimonials={getTestimonials}
      getTotalUserCompanies={getTotalUserCompanies}
      getTotalUsersInMillions={getTotalUsersInMillions}
      newsletterSubscribeAction={newsletterSubscribeAction}
    />
  );
}
