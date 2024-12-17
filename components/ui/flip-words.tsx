"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(startAnimation, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden", // Prevent layout shifts and overflows
        className
      )}
    >
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setIsAnimating(false)}
      >
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            y: 20, // Smaller y-shift for smoother transitions on mobile
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20, // Adjust exit y-shift for better visual alignment
            filter: "blur(4px)", // Less aggressive blur on mobile
            scale: 1.2, // Slight scaling to prevent drastic size changes
          }}
          transition={{
            type: "spring",
            stiffness: 80, // Softer spring for smoother animations
            damping: 12,
          }}
          className={cn(
            "z-10 inline-block text-left text-neutral-900 dark:text-neutral-100 px-2"
          )}
        >
          {words[currentIndex]
            .split(" ")
            .map((word, wordIndex) => (
              <motion.span
                key={`${word}-${wordIndex}`}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }} // Subtle y-shift and blur
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.2, // Faster delays for smoother appearance
                  duration: 0.25,
                }}
                className="inline-block whitespace-nowrap"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${word}-${letter}-${letterIndex}`}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: wordIndex * 0.2 + letterIndex * 0.03, // Faster animation timing for better mobile experience
                      duration: 0.2,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
