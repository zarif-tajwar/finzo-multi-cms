"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const visualParentVariants: Variants = {
  initial: {},
  animate: {},
};

const visualItemVariants: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
};

const HeroVisual = () => {
  return (
    <motion.div
      variants={visualParentVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: "some" }}
      className="-ml-10 flex justify-center"
    >
      <div
        className="relative aspect-[1.02] w-full max-w-lg lg:max-w-none"
        data-hero-visual-parent
      >
        <motion.div
          variants={visualItemVariants}
          className={cn(
            "absolute left-[calc((275/786)*100%)] top-0 z-20 w-[calc((294/786)*100%)] origin-bottom-left",
          )}
          data-iphone
          transition={{ duration: 0.4, ease: "backOut" }}
        >
          <Image
            src={"/images/hero/iphone.png"}
            width={667}
            height={1662}
            alt={"Finzo App in an IPhone."}
          />
        </motion.div>
        <motion.div
          variants={visualItemVariants}
          className={cn(
            "absolute left-[calc((443/786)*100%)] top-[calc((104/771)*100%)] z-40 w-[calc((292.86/786)*100%)] origin-bottom-left drop-shadow-sm",
          )}
          data-visa
          transition={{ duration: 0.4, ease: "backOut", delay: 0.3 }}
        >
          <Image
            src={"/images/hero/slice3.png"}
            width={661}
            height={1081}
            alt={"A visa trigger of a finzo user!"}
          />
        </motion.div>
        <motion.div
          transition={{ duration: 0.3, ease: "backOut", delay: 0.6 }}
          variants={visualItemVariants}
          className={cn(
            "absolute left-[calc((265/786)*100%)] top-[calc((163/771)*100%)] z-30 w-[calc((153.61/786)*100%)] origin-bottom-left drop-shadow-sm",
          )}
          data-oneapp
        >
          <Image
            src={"/images/hero/slice2.png"}
            width={592}
            height={697}
            alt={"One app for all!"}
          />
        </motion.div>
        <motion.div
          transition={{ duration: 0.3, ease: "backOut", delay: 0.9 }}
          variants={visualItemVariants}
          className={cn(
            "absolute left-[calc((181/786)*100%)] top-[calc((325/771)*100%)] z-10 w-[calc((167.22/786)*100%)] origin-bottom-left drop-shadow-sm",
          )}
          data-secure
        >
          <Image
            src={"/images/hero/slice1.png"}
            width={592}
            height={1004}
            alt={"Secure payment!"}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default HeroVisual;
