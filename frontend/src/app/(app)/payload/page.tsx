import { newsletterSubscribeAction } from "@/lib/actions/actions-payload";
import {
  getTestimonials,
  getTotalUserCompanies,
  getTotalUsersInMillions,
} from "@/lib/server/fetcher-payload";
import { SetupPage } from "../_common/setup-page";

export const revalidate = 86400;

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
