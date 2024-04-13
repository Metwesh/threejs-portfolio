import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utilities/motion";

export default function SectionWrapper(props: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={props.id}>
        &nbsp;
      </span>
      {props.children}
    </motion.section>
  );
}
