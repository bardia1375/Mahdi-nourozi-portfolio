import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-dark  xs:dark:bg-light xs:text-light xs:dark:text-dark xs:text-xs"
      whileHover={{ scale: 1.2 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust this value according to your needs

  return (
    <div>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh]  xs:h-[50vh] 
      lg:bg-circularLightLg  lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkLMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center  rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 1.5 }}
        >
          Istgah
        </motion.div>
        {isMobile ? (
          <>
            <Skill name="Producer" x="-35vw" y="0vw" />
            <Skill name="Art director" x="30vw" y="0vw"/>
            <Skill name="Art consultancy" x="0vw" y="15vw" />
            <Skill name="project designer" x="20vw" y="35vw" />
            <Skill name="Concert Organizer" x="20vw" y="-35vw" />
            <Skill name="Event Coordinator" x="0vw" y="-15vw" />
            <Skill name="Choir Conductor" x="-20vw" y="-35vw" />
            <Skill name="Musician" x="-20vw" y="35vw" />
          </>
        ) : (
          <>
            <Skill name="Producer" x="-25vw" y="2vw" />
            <Skill name="Art director" x="-5vw" y="-10vw" />
            <Skill name="Art consultancy" x="20vw" y="6vw" />
            <Skill name="project designer" x="0vw" y="12vw" />
            <Skill name="Concert Organizer" x="-20vw" y="-15vw" />
            <Skill name="Event Coordinator" x="15vw" y="-12vw" />
            <Skill name="Choir Conductor" x="32vw" y="-5vw" />
            <Skill name="Musician" x="18vw" y="18vw" />
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
