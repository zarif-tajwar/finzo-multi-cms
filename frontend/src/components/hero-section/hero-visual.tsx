"use client";

import { cn } from "@/lib/utils";
import {
  type Variants,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { type MouseEvent, useCallback, useRef, useState } from "react";

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

const useHoverTransform = () => {
  const translateX = useMotionValue(0);
  const translateY = useMotionValue(0);
  const springTranslateX = useSpring(translateX);
  const springTranslateY = useSpring(translateY);
  const tranform = useMotionTemplate`translateX(${springTranslateX}px) translateY(${springTranslateY}px)`;
  return [translateX, translateY, tranform] as const;
};

const HeroVisual = () => {
  const hoverAreaRef = useRef<HTMLDivElement | null>(null);

  const [visaCardX, visaCardY, visaCardTransform] = useHoverTransform();
  const [oneAppCardX, oneAppCardY, oneAppCardTransform] = useHoverTransform();
  const [secureCardX, secureCardY, secureCardTransform] = useHoverTransform();
  const [isInitialAnimationRunning, setInitialAnimationRunning] =
    useState(true);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!hoverAreaRef.current || isInitialAnimationRunning) return;

      const rect = hoverAreaRef.current.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      visaCardX.set(((mouseY * 50) / height - 100) * -1);
      visaCardY.set((mouseX * 50) / width - 25);

      oneAppCardX.set(((mouseY * 20) / height + 120) * -1);
      oneAppCardY.set((mouseX * 20) / width - 40);

      secureCardX.set(((mouseY * 30) / height + 100) * -1);
      secureCardY.set((mouseX * 30) / width + 50);
    },
    [
      visaCardX,
      visaCardY,
      oneAppCardX,
      oneAppCardY,
      secureCardX,
      secureCardY,
      isInitialAnimationRunning,
    ],
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (!hoverAreaRef.current || isInitialAnimationRunning) return;

      visaCardX.set(0);
      visaCardY.set(0);

      oneAppCardX.set(0);
      oneAppCardY.set(0);

      secureCardX.set(0);
      secureCardY.set(0);
    },
    [
      visaCardX,
      visaCardY,
      oneAppCardX,
      oneAppCardY,
      secureCardX,
      secureCardY,
      isInitialAnimationRunning,
    ],
  );

  return (
    <motion.div
      variants={visualParentVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: "some" }}
      className="-ml-10 flex justify-center"
      onAnimationComplete={() => {
        setInitialAnimationRunning(false);
      }}
    >
      <div
        className="relative aspect-[1.02] w-full max-w-lg lg:max-w-none"
        data-hero-visual-parent
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={hoverAreaRef}
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
          style={{
            transform: isInitialAnimationRunning
              ? undefined
              : visaCardTransform,
          }}
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
          style={{
            transform: isInitialAnimationRunning
              ? undefined
              : oneAppCardTransform,
          }}
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
          style={{
            transform: isInitialAnimationRunning
              ? undefined
              : secureCardTransform,
          }}
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
