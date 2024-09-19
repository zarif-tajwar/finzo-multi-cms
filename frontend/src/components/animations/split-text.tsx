import { motion, type Variants } from "framer-motion";

export const SplitWords = ({
  children,
  variants,
}: {
  children: string;
  variants: Variants;
}) => {
  return children.split(/(\s+)/).map((word, i) => {
    return (
      <motion.span
        key={i}
        style={{ whiteSpace: "pre-wrap", display: "inline-block" }}
        variants={variants}
      >
        {word}
      </motion.span>
    );
  });
};
