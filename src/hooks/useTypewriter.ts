import { useState, useEffect, useRef } from "react";

const DELAY = 200;

const useTypewriter = (text: string[], enabled: boolean): string => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [caret, setCaret] = useState("|");

  // This effect handles the typing and deleting of characters
  useEffect(() => {
    if (!enabled) return; // If the typewriter effect is not enabled, do nothing
    const interval = setInterval(
      () => {
        if (isDeleting)
          // If currently deleting, decrease the character index
          setCurrentCharIndex((prevCharIndex) => prevCharIndex - 1);
        // If currently typing, increase the character index
        else setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);
      },
      // Use a different delay depending on whether we're typing or deleting
      isDeleting ? DELAY / 3 : DELAY,
    );

    // Clean up the interval when the component unmounts or when the dependencies change
    return () => clearInterval(interval);
  }, [DELAY, isDeleting, enabled]);

  // The timeout ref for the caret
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // This effect handles the transition between typing and deleting
  useEffect(() => {
    if (!isDeleting && currentCharIndex === text[currentIndex].length) {
      // If finished typing, start deleting after a delay
      setTimeout(() => {
        setIsDeleting(true);
      }, DELAY * 10);

      // Start the caret blinking
      intervalRef.current = setInterval(() => {
        setCaret((prev) => (prev === "|" ? "" : "|"));
      }, 1000);
    } else if (isDeleting && currentCharIndex === 0) {
      // If finished deleting, start typing the next text
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    } else if (isDeleting) {
      // Stop the caret blinking
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [currentCharIndex, currentIndex, isDeleting, text]);

  // Return the current text with the caret appended
  return `${text[currentIndex].substring(0, currentCharIndex)}${caret}`;
};

export default useTypewriter;
