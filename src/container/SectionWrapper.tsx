import { motion } from "framer-motion";
import { useContext } from "react";
import MobileContext from "../contexts/MobileContext";
import { styles } from "../styles";
import { staggerContainer } from "../utilities/motion";

export default function SectionWrapper(props: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { isMobile } = useContext(MobileContext);

  return (
    <motion.section
      variants={staggerContainer(
        isMobile ? 0.25 : undefined,
        isMobile ? 0.25 : undefined,
      )}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.25 }}
      className={`${props.className ?? ""} ${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={props.id}>
        &nbsp;
      </span>
      {props.children}
    </motion.section>
  );
}
