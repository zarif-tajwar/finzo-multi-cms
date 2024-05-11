import { cn } from "@/lib/utils";
import Image from "next/image";

const HeroVisual = () => {
  return (
    <div className="-ml-10 flex justify-center">
      <div
        className="aspect-[1.02] relative w-full lg:max-w-none max-w-lg"
        data-hero-visual-parent
      >
        <div
          className={cn(
            "w-[calc((294/786)*100%)] z-20 left-[calc((275/786)*100%)] top-0 absolute"
            // "translate-y-[20%] opacity-0"
          )}
          data-iphone
        >
          <Image
            src={"/images/hero/iphone.png"}
            width={667}
            height={1662}
            alt={"Finzo App in an IPhone."}
          />
        </div>
        <div
          className={cn(
            "w-[calc((292.86/786)*100%)] z-40 left-[calc((443/786)*100%)] top-[calc((104/771)*100%)] origin-left absolute drop-shadow-sm"
            // "translate-y-[20%] scale-[0.7] opacity-0"
          )}
          data-visa
        >
          <Image
            src={"/images/hero/slice3.png"}
            width={661}
            height={1081}
            alt={"A visa trigger of a finzo user!"}
          />
        </div>
        <div
          className={cn(
            "w-[calc((153.61/786)*100%)] z-30 absolute left-[calc((265/786)*100%)] top-[calc((163/771)*100%)] origin-left drop-shadow-sm"
            // "translate-y-[20%] scale-[0.7] opacity-0"
          )}
          data-oneapp
        >
          <Image
            src={"/images/hero/slice2.png"}
            width={592}
            height={697}
            alt={"One app for all!"}
          />
        </div>
        <div
          className={cn(
            "w-[calc((167.22/786)*100%)] z-10 absolute left-[calc((181/786)*100%)] top-[calc((325/771)*100%)] origin-left drop-shadow-sm"
            // "translate-y-[20%] scale-[0.7] opacity-0"
          )}
          data-secure
        >
          <Image
            src={"/images/hero/slice1.png"}
            width={592}
            height={1004}
            alt={"Secure payment!"}
          />
        </div>
      </div>
    </div>
  );
};
export default HeroVisual;
