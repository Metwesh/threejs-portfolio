import { useState } from "react";
import { Link } from "react-router-dom";

import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

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
          {/* TODO: Add my own implementation for this hamburger menu */}
          <img
            src={toggle ? close : menu}
            alt="Menu"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
            onKeyDown={(e) =>
              e.key === "Space" || e.key === "Enter"
                ? setToggle((prev) => !prev)
                : null
            }
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link, index) => (
                <li key={`nav-link-${link.id}-${index}`}>
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
