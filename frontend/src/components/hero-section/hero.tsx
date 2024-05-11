import { Button } from "../button";
import HeroVisual from "./hero-visual";

const Hero = () => {
  return (
    <section className="3xl:min-h-0 3xl:h-[var(--hero-height)] 3xl:max-h-[67.5rem] min-h-[var(--hero-height)] [--hero-height:calc(100svh-var(--nav-height))] flex items-center">
      <div className="sm:py-10 py-8 md:py-16">
        <div className="items-center gap-x-8 gap-y-8 grid lg:grid-cols-[1.2fr_1fr]">
          <HeroVisual />
          <div className="pt-0 lg:max-w-[32.625rem] flex flex-col items-center lg:block">
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-balance font-medium mb-6 tracking-tight text-center lg:text-left">
              Control your financial future easily
            </h1>
            <p className="text-lg sm:text-xl text-neutral-500 mb-16 max-w-screen-sm text-center lg:text-left">
              From easy money management, to financial goals and investments.
              Open your account in a Flash!
            </p>
            <div className="sm:flex w-full sm:w-auto sm:flex-row gap-y-2 grid gap-x-5 mb-16 lg:mb-8">
              <Button>Open Account</Button>
              <Button variant={"outline"}>Generate your card</Button>
            </div>
            <div className="flex gap-8 flex-col items-center md:flex-row">
              <div className="flex">
                {[...Array(3).keys()].map((_, i) => {
                  return (
                    <span
                      key={i}
                      className="bg-primary ring-4 ring-neutral-200 sm:size-12 size-10 rounded-full -ml-2 first:ml-0"
                    />
                  );
                })}
              </div>
              <div className="flex flex-col items-center text-center lg:items-stretch lg:text-left">
                <div className="flex items-center gap-x-2">
                  <span className="inline-flex w-8 h-8 items-center justify-center">
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
                  <p className="text-2xl md:text-3xl font-medium">
                    15 Million+ Users
                  </p>
                </div>
                <p className="text-neutral-500 col-span-2 max-w-96">
                  Trusted by million of satidfied users, our financial services
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
