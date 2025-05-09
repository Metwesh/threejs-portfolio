import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { personalDescription, services } from "../constants";
import SectionWrapper from "../container/SectionWrapper";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utilities/motion";

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview.</p>
      </motion.div>
      <motion.p
        variants={fadeIn(undefined, undefined, 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {personalDescription}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Tilt className="xs:w-[250px] w-full" key={service.title}>
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </SectionWrapper>
  );
}
