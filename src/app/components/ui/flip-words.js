"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/app/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}>
      <motion.div
        initial={{
          opacity: 0,
          rotateX: -90,
          transformOrigin: "center center"
        }}
        animate={{
          opacity: 1,
          rotateX: 0
        }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 15,
          duration: 0.6
        }}
        exit={{
          opacity: 0,
          rotateX: 90,
          transformOrigin: "center center",
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 px-0.5",
          className
        )}
        key={currentWord}>
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              delay: wordIndex * 0.08,
              duration: 0.5,
              type: "spring",
              stiffness: 70,
              damping: 15
            }}
            className="inline-block whitespace-nowrap"
            style={{ 
              transformStyle: "preserve-3d", 
              perspective: "1200px", 
              display: "inline-block",
              backfaceVisibility: "hidden"
            }}>
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  delay: wordIndex * 0.08 + letterIndex * 0.02,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 70, 
                  damping: 15
                }}
                style={{ 
                  transformStyle: "preserve-3d", 
                  display: "inline-block",
                  backfaceVisibility: "hidden" 
                }}>
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};