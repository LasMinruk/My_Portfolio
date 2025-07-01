import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import yourPhoto from "../assets/your-photo.png";

// SVG icons for social links
const socialLinks = [
  {
    href: "https://github.com/LasMinruk",
    label: "GitHub",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="hover:text-[#915EFF] transition-colors duration-200 object-contain">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/lasiruminruk/",
    label: "LinkedIn",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="hover:text-[#915EFF] transition-colors duration-200 object-contain">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
      </svg>
    ),
  },
];

// Responsive icon size classes
const iconSize = "w-16 h-16 lg:w-20 lg:h-20";

// Rapidly changing text component
const roles = [
  "UG Software Engineer",
  "UI/UX Designer",
  "Video Editor",
  "Freelancer",
];

// Typewriter effect for rapidly changing text
function ChangingText({ className }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < roles[index].length) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev + roles[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 40);
      } else {
        timeout = setTimeout(() => setTyping(false), 700);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 20);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, index]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-2 h-6 xs:w-3 xs:h-8 sm:w-4 sm:h-10 lg:w-5 lg:h-12 animate-pulse align-middle">|</span>
    </span>
  );
}

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen h-auto mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-center gap-8 sm:gap-5`}
      >
        <div className='flex flex-row sm:flex-col justify-center items-center mt-5 gap-2 sm:gap-0'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-32 xs:h-40 sm:h-80 violet-gradient' />
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8 sm:gap-8 gap-4 w-full">
          <div className="flex-1 w-full flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-0">
            <h1 className={`${styles.heroHeadText} text-white text-2xl xs:text-3xl sm:text-5xl lg:text-6xl`}>
              Hi, I'm <span className='text-[#915EFF]'>Lasiru Minruk</span>
            </h1>
            <div className="block sm:hidden w-full flex justify-center mt-4 mb-4">
              <motion.div
                initial={{ scale: 1, y: 0 }}
                animate={{ scale: [1, 1.08, 1], y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                className="w-32 h-32 xs:w-40 xs:h-40 rounded-full border-4 border-[#915EFF] shadow-2xl transition-all duration-300 mx-auto flex items-center justify-center bg-white/5"
              >
                <img
                  src={yourPhoto}
                  alt="Your profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
            </div>
            <div className="flex justify-center sm:justify-start w-full mt-6 mb-6 sm:mt-10 sm:mb-10">
               <ChangingText className={`text-white-100 font-bold text-base xs:text-lg sm:text-2xl lg:text-4xl break-words text-center sm:text-left w-full`} />
             </div>
            <div className="flex flex-row justify-center sm:justify-start items-center gap-4 sm:gap-6 lg:gap-8 mt-6 mb-8 w-full">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`text-white hover:scale-110 focus:scale-110 active:scale-95 transition-transform duration-200 flex items-center justify-center w-12 h-12 xs:w-16 xs:h-16 lg:w-20 lg:h-20`}
                  style={{ fontSize: 0 }}
                >
                  {React.cloneElement(link.icon, { className: `w-8 h-8 xs:w-12 xs:h-12 lg:w-16 lg:h-16 ${link.icon.props.className || ''}` })}
                </a>
              ))}
            </div>
            <div className="flex justify-center sm:justify-start w-full mb-8 sm:mb-12">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-2 xs:px-8 xs:py-3 rounded-lg border-2 border-[#915EFF] text-[#915EFF] font-semibold bg-transparent hover:bg-[#915EFF] hover:text-white transition-all duration-200 text-sm xs:text-base sm:text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-opacity-50"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-center justify-center w-auto">
            <motion.div
              initial={{ scale: 1, y: 0 }}
              animate={{ scale: [1, 1.08, 1], y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              className="w-40 h-40 lg:w-56 lg:h-56 max-w-sm rounded-full border-4 border-[#915EFF] shadow-2xl transition-all duration-300 flex items-center justify-center bg-white/5"
            >
              <img
                src={yourPhoto}
                alt="Your profile"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
