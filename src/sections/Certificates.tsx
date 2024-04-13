import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certificateDescription, certificates } from "../constants";
import { fadeIn, textVariant } from "../utilities/motion";
import SectionWrapper from "../container/SectionWrapper";

export default function Certificates() {
  return (
    <SectionWrapper>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Accomplishments & Credentials</p>
        <p className={styles.sectionHeadText}>Certificates.</p>
      </motion.div>
      <motion.p
        variants={fadeIn(undefined, undefined, 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {certificateDescription}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {certificates.map((cert, index) => (
          <Tilt
            className="xs:w-[250px] w-full"
            key={`certificate-${cert.title}-${index}`}
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src={cert.icon}
                  alt={cert.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </SectionWrapper>
  );
}
