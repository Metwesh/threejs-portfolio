import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../container/SectionWrapper";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utilities/motion";

export default function Experience() {
  return (
    <SectionWrapper id="work">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <p className={styles.sectionHeadText}>Work Experience.</p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={`experience-${index}`}
              contentStyle={{ backgroundColor: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              date={experience.date}
              iconStyle={{ backgroundColor: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
              }
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  {experience.title}
                </h3>
                <p className="text-secondary text-[16px] font-semibold">
                  {experience.company_name}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] p-l-1 tracking-wider"
                  >
                    <strong>{`${point.title}: `}</strong>
                    <span>{point.subtitle}</span>
                  </li>
                ))}
              </ul> 
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
}
