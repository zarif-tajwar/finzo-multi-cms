"use client";
import { companies } from "@/lib/static-data";
import { motion, type Variants } from "framer-motion";
import { SplitWords } from "../animations/split-text";
import Image from "next/image";
import { Paragraph, SecondHeading, Section } from "../common";

const MotionParagraph = motion.create(Paragraph);

const headingAnimationParentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const userCompanyParentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const UserCompaniesClient = ({
  totalUserCompanies,
}: {
  totalUserCompanies: number;
}) => {
  return (
    <Section>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: "some" }}
        variants={headingAnimationParentVariants}
        className="flex flex-col items-center"
      >
        <SecondHeading>
          <SplitWords variants={slideVariants}>
            {`${totalUserCompanies}+ The fastest growing company use Finzo`}
          </SplitWords>
        </SecondHeading>
        <MotionParagraph
          variants={slideVariants}
          className="mb-9 max-w-sm text-center lg:max-w-md"
        >
          Many companies have tried using Finzo and they trust the safety of
          their money
        </MotionParagraph>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        variants={userCompanyParentVariants}
        className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8"
      >
        {companies.map((company) => {
          return (
            <div
              key={company.company}
              className="flex items-center justify-center rounded-2xl bg-offwhite px-2 py-6 sm:px-4 sm:py-8 md:rounded-3xl lg:py-12"
            >
              <motion.div
                variants={slideVariants}
                className="relative h-6 w-full sm:h-7 lg:h-9"
              >
                <Image
                  src={company.loc}
                  alt={`Logo of ${company.company}`}
                  fill
                  className="object-scale-down"
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default UserCompaniesClient;
