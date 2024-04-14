import SectionWrapper from "../container/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utilities/motion";
import { styles } from "../styles";
import { github, linkIcon } from "../assets";
import { projects, projectsDescription } from "../constants";
import { Tilt } from "react-tilt";

export default function Work() {
  return (
    <SectionWrapper id="work">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <p className={styles.sectionHeadText}>Projects.</p>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {projectsDescription}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, outerIndex) => (
          <motion.div
            key={`projects-${outerIndex}`}
            variants={fadeIn("up", "spring", 0.5 * outerIndex, 0.75)}
          >
            <Tilt
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <div className="relative w-full h-[230px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {"source_code_link" in project && "demo_link" in project ? (
                  <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
                    <button
                      title={`Visit ${project.name} demo`}
                      onClick={() => window.open(project.demo_link, "_blank")}
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <img
                        src={linkIcon}
                        alt="Github"
                        className="w-6 h-6 object-contain"
                      />
                    </button>
                    <button
                      title={`Visit ${project.name} repository`}
                      onClick={() =>
                        window.open(project.source_code_link, "_blank")
                      }
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <img
                        src={github}
                        alt="Github"
                        className="w-7 h-7 object-contain"
                      />
                    </button>
                  </div>
                ) : "source_code_link" in project ? (
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <button
                      title={`Visit ${project.name} repository`}
                      onClick={() =>
                        window.open(project.source_code_link, "_blank")
                      }
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <img
                        src={github}
                        alt="Github"
                        className="w-7 h-7 object-contain"
                      />
                    </button>
                  </div>
                ) : null}
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  {project.name}
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, innerIndex) => (
                  <p
                    key={`project-${outerIndex}-tech-${tag.name}-${innerIndex}`}
                    className={`text-[14px] ${tag.color}-text-gradient`}
                  >
                    {`#${tag.name}`}
                  </p>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
