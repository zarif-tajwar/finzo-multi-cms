import { newsletterSubscribeAction } from "@/lib/actions/actions-contentful";
import {
  getTestimonials,
  getTotalUserCompanies,
  getTotalUsersInMillions,
} from "@/lib/server/fetcher-contentful";
import { SetupPage } from "../_common/setup-page";

export const revalidate = 86400;

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
