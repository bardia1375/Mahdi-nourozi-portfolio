import React from "react";
import { animate, delay, motion } from "framer-motion";
function AnimatedText({ text, className = "" }) {
  const qoute = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren:0.08
      },
    },
  };

  const singelWord = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize ${className} dark:text-light`}
        variants={qoute}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            variants={singelWord}
            className="inline-block"

          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
