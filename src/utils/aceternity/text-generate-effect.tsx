"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  delay,
}: {
  words: string;
  className?: string;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split("");
  useEffect(() => {
    setTimeout(() => {
        animate(
        "span",
        {
            opacity: 1,
        },
        {
            duration: 1,
            delay: stagger(0.025),
        }
        );
    }, delay);
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
            >
              {word}{""}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      {/* <div className="mt-4"> */}
        {/* <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide"> */}
          {renderWords()}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};
