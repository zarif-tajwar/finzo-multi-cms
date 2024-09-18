import type { GetTotalUsersInMillionsType } from "@/lib/types/common";
import { HeroContent } from "./hero-content";
import HeroVisual from "./hero-visual";

const Hero = async ({
  getTotalUsersInMillions,
}: {
  getTotalUsersInMillions: GetTotalUsersInMillionsType;
}) => {
  const totalUsersInMillions = (await getTotalUsersInMillions()) || 15;
  return (
    <section className="3xl:min-h-0 3xl:h-[var(--hero-height)] 3xl:max-h-[67.5rem] flex min-h-[var(--hero-height)] items-center [--hero-height:calc(100svh-var(--nav-height))]">
      <div className="py-8 sm:py-10 md:py-16">
        <div className="grid items-center gap-x-8 gap-y-8 lg:grid-cols-[1.2fr_1fr]">
          <HeroVisual />
          <HeroContent totalUsersInMillions={totalUsersInMillions} />
        </div>
      </div>
    </section>
  );
};
export default Hero;
