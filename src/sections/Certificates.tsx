import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { certificateDescription, certificates } from "../constants";
import SectionWrapper from "../container/SectionWrapper";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utilities/motion";

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
          >
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full cyan-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div>
                <a
                  className="bg-tertiary rounded-[20px] p-5 min-h-[280px] flex justify-evenly items-center flex-col"
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={cert.title}
                >
                  <img
                    src={cert.icon}
                    alt={cert.title}
                    className="w-full h-full max-h-[154px] object-contain"
                  />
                </a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </SectionWrapper>
  );
}
