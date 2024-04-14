import Hamburger from "./Hamburger";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { logo } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { subMenuAnimate } from "../utilities/motion";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Metwesh&nbsp;<span className="sm:block hidden">Mohamed H. Aly</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row md:gap-10 gap-6">
          {navLinks.map((link, index) => (
            <li key={`nav-link-${link.id}-${index}`}>
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } p-3 hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Hamburger
            onButtonClick={() => setMenuIsOpen(!menuIsOpen)}
            active={menuIsOpen}
          />
          <motion.div
            initial="exit"
            animate={menuIsOpen ? "enter" : "exit"}
            variants={subMenuAnimate}
            className={`${
              !menuIsOpen ? "hidden" : "flex"
            } bg-tertiary border-2 border-solid border-secondary menu-shadow absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="w-full max-h-full list-none flex flex-col justify-end items-start gap-1">
              {navLinks.map((link, index) => (
                <li
                  key={`nav-link-${link.id}-${index}`}
                  className="flex justify-center items-center w-full h-full"
                >
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } w-full hover:text-white py-4 ps-4 pe-8 font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setMenuIsOpen(false);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
