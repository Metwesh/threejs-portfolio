import SectionWrapper from "../container/SectionWrapper";
import TechCanvas from "../components/canvases/TechCanvas";
import { motion } from "framer-motion";

export default function Tech() {
  return (
    <div className="relative">
      <SectionWrapper className="h-screen">
        <TechCanvas />
        <p className="mt-3 text-secondary text-[17px] max-w-7xl w-full leading-[30px] text-right">
          For a detailed view check my resume below
        </p>
      </SectionWrapper>
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#projects" aria-label="Scroll to about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeOut",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
