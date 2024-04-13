import { motion } from "framer-motion";
import { footerLinks } from "../constants";
import { fadeIn } from "../utilities/motion";
import { styles } from "../styles";

export default function Footer() {
  return (
    <footer
      className={`${styles.padding} flex justify-center items-center flex-wrap gap-10`}
    >
      {footerLinks.map((linkData, index) => (
        <motion.div
          key={linkData.title}
          variants={fadeIn("left", "spring", 0.5 * index, 0.75)}
          className="bg-tertiary py-3 lg:px-8 px-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          <a
            title={linkData.title}
            aria-label={linkData.title}
            href={linkData.link}
          >
            <span className="lg:block hidden">{linkData.title}</span>
            <img
              src={linkData.icon}
              alt={linkData.title}
              className="lg:hidden block w-12 h-12 object-contain"
            />
          </a>
        </motion.div>
      ))}
    </footer>
  );
}
