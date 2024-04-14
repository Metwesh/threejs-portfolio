import { Variants } from "framer-motion";

type AnimationDirection = "left" | "right" | "up" | "down";
type AnimationType = "decay" | "spring" | "keyframes" | "tween" | "inertia";

export const textVariant = (delay?: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: AnimationDirection | undefined,
  type: AnimationType | undefined,
  delay: number,
  duration: number,
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type ?? "spring",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: AnimationDirection,
  type: "decay" | "spring" | "keyframes" | "tween" | "inertia",
  delay: number,
  duration: number,
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number,
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren ?? 0,
      },
    },
  };
};

export const subMenuAnimate: Variants = {
  enter: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.25,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    translateX: 100,
    transition: {
      duration: 0.25,
    },
    transitionEnd: {
      display: "none",
    },
  },
};
