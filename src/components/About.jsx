import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ServiceCard component displays each service with tilt and animation
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full max-w-xs mx-auto mb-6 sm:mb-0'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* Service icon */}
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        {/* Service title */}
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// About section component
const About = () => {
  return (
    <>
      {/* Section heading and introduction */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Overview paragraph about yourself */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-base xs:text-[17px] max-w-3xl leading-[28px] xs:leading-[30px] text-center sm:text-left px-2 sm:px-0'
      >
        I am a dedicated software engineering undergraduate with a strong passion for developing innovative software solutions that enhance organizational efficiency and drive success. I possess proven leadership skills, with experience motivating, educating, and managing teams to achieve project goals effectively.
        
        Known for being hardworking, adaptable, and self-motivated, I approach challenges with enthusiasm and maintain a positive, collaborative attitude. My excellent interpersonal and communication skills enable me to build strong working relationships and collaborate seamlessly with diverse teams.
        
        I am committed to continuous learning and applying best practices in software development to deliver impactful results.
        
        If you want, I can also help tailor this further to specific roles or industries you are targeting.
      </motion.p>

      {/* Service cards section */}
      <div className='mt-20 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 items-center sm:items-stretch'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Export the About section wrapped with SectionWrapper for consistent section styling
export default SectionWrapper(About, "about");
