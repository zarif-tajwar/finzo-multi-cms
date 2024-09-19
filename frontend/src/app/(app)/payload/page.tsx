import { newsletterSubscribeAction } from "@/lib/actions/actions-payload";
import {
  getTestimonials,
  getTotalUserCompanies,
  getTotalUsersInMillions,
} from "@/lib/server/fetcher-payload";
import { SetupPage } from "../_common/setup-page";
import { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Finzo Finance on Payload",
};

export default function PayloadPage() {
  return (
    <SetupPage
      getTestimonials={getTestimonials}
      getTotalUserCompanies={getTotalUserCompanies}
      getTotalUsersInMillions={getTotalUsersInMillions}
      newsletterSubscribeAction={newsletterSubscribeAction}
    />
  );
}
