import Link from "next/link";
import { Button } from "../button";

const NewsLetterForm = () => {
  return (
    <div className="w-full max-w-105 lg:ml-auto lg:pt-[6.5rem]">
      <div className="grid gap-6">
        <p className="font-medium text-white">Stay up to date</p>
        <form>
          <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 rounded-full border-none bg-neutral-700 px-6 py-4 font-medium text-white outline-none ring-0 placeholder:text-neutral-50 focus:ring-2 focus:ring-neutral-200"
            />
            <Button>Subscribe</Button>
          </div>
        </form>
        <p className="font-medium text-neutral-400">
          By subscribing you agree to our{" "}
          <Link
            href={"#"}
            className="text-nowrap text-neutral-200 underline transition-colors duration-100 hover:text-white"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};
export default NewsLetterForm;
