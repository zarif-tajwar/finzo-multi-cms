import Image from "next/image";
import { Button } from "../button";
import { Paragraph } from "../common";
import HeroVisual from "./hero-visual";

const avatars = [
  { loc: "/images/hero/avatar1.png", bg: "bg-orange-200" },
  { loc: "/images/hero/avatar2.png", bg: "bg-violet-200" },
  { loc: "/images/hero/avatar3.png", bg: "bg-emerald-200" },
];

const Hero = () => {
  return (
    <section className="3xl:min-h-0 3xl:h-[var(--hero-height)] 3xl:max-h-[67.5rem] flex min-h-[var(--hero-height)] items-center [--hero-height:calc(100svh-var(--nav-height))]">
      <div className="py-8 sm:py-10 md:py-16">
        <div className="grid items-center gap-x-8 gap-y-8 lg:grid-cols-[1.2fr_1fr]">
          <HeroVisual />
          <div className="flex flex-col items-center pt-0 lg:block lg:max-w-[32.625rem]">
            <h1 className="mb-6 text-balance text-center text-5xl font-bold tracking-tight sm:text-6xl sm:font-medium md:text-7xl lg:text-left xl:text-8xl">
              Control your financial future easily
            </h1>
            <Paragraph className="mb-16 max-w-screen-sm text-center text-gray-500 md:text-xl lg:text-left lg:text-2xl">
              From easy money management, to financial goals and investments.
              Open your account in a Flash!
            </Paragraph>
            <div className="mb-16 grid w-full gap-x-5 gap-y-2 sm:flex sm:w-auto sm:flex-row lg:mb-8">
              <Button>Open Account</Button>
              <Button variant={"outline"}>Generate your card</Button>
            </div>
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex">
                {avatars.map((avatar, i) => {
                  return (
                    <div
                      key={i}
                      className={`relative -ml-2 size-10 overflow-clip rounded-full first:ml-0 sm:size-12 ${avatar.bg}`}
                    >
                      <Image
                        src={avatar.loc}
                        fill
                        className="h-full w-full object-cover"
                        alt={`Avatar ${i}`}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col items-center text-center lg:items-stretch lg:text-left">
                <div className="flex items-center gap-x-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center">
                    <svg
                      width="20"
                      height="11"
                      viewBox="0 0 20 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9064 8.13999L14.6264 3.85999L12.0131 1.23332C10.9064 0.126654 9.10644 0.126654 7.99977 1.23332L1.0931 8.13999C0.186436 9.04665 0.839769 10.5933 2.10644 10.5933H9.58643H17.8931C19.1731 10.5933 19.8131 9.04665 18.9064 8.13999Z"
                        fill="#A6F4C5"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-2xl font-medium md:text-3xl">
                    15 Million+ Users
                  </p>
                </div>
                <p className="col-span-2 max-w-96 text-neutral-500">
                  Trusted by million of satisfied users, our financial services
                  have made a real impact on people’s lives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
