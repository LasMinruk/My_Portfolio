import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import yourPhoto from "../assets/your-photo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={yourPhoto} alt='Lasiru Minruk' className='w-9 h-9 object-cover rounded-full border-2 border-[#915EFF]' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Lasiru Minruk
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-6 md:gap-10 xl:gap-14'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.external ? (
                <a href={nav.href} target="_blank" rel="noopener noreferrer">{nav.title}</a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
            whileTap={{ scale: 0.8, rotate: 90 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
              >
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[18px] md:text-[16px] py-2 px-2 rounded-lg w-full ${
                        active === nav.title ? "text-white bg-[#915EFF]/20" : "text-secondary"
                      } hover:bg-[#915EFF]/10 transition-colors`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      {nav.external ? (
                        <a href={nav.href} target="_blank" rel="noopener noreferrer">{nav.title}</a>
                      ) : (
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
