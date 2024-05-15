"use client";

import { newsletterSubscribeAction } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { newsletterSubscribeSchema } from "@/lib/validation/news-letter";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "../button";
import { CheckIcon, SpinnerIcon } from "../icons";

const NewsLetterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = newsletterSubscribeSchema.safeParse(data);
    if (!parsed.success) {
      setIsLoading(false);
      setError("Please enter a valid email!");
      return;
    }

    const res = await newsletterSubscribeAction(parsed.data);
    if (res.error) {
      setIsLoading(false);
      setError(res.error);
      return;
    }

    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <div className="w-full max-w-105 lg:ml-auto lg:pt-[6.5rem]">
      <div className="grid gap-6">
        <p className="font-medium text-white">Stay up to date</p>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="min-w-0 rounded-full border-none bg-neutral-700 px-6 py-4 font-medium text-white outline-none ring-0 placeholder:text-neutral-50 focus:ring-2 focus:ring-neutral-200"
            />
            <Button
              type="submit"
              disabled={isLoading || isSuccess}
              className={cn(
                isSuccess &&
                  "bg-emerald-400 disabled:opacity-100 disabled:hover:bg-emerald-400",
              )}
            >
              {!isLoading && !isSuccess && `Subscribe`}
              {!isLoading && isSuccess && (
                <>
                  <CheckIcon className="size-5" /> Subscribed
                </>
              )}
              {isLoading && (
                <>
                  <SpinnerIcon className="size-5 animate-spin" /> Loading
                </>
              )}
            </Button>
            {error && <p className="text-rose-400 sm:col-span-2">{error}</p>}
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
