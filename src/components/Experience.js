import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon refrence={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        LIVE PERFORMANCES
      </h2>
      <div ref={ref} className="w-[60%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Ivan Shams Hall"
            time="1992 to 1995"
            address="Tehran"
            work=" Holding 11 performances of film music repertoire from 1992 to 1995 in Ivan Shams Hall."
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Tehran University of Art"
            time="2019"
            address="Tehran"
            work="Winning the first place in the international faculty festival of Tehran University of Art - 2019."
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Fajr International Music Festival"
            time="2019"
            address="Tehran"
            work="Attending the 30th Fajr International Music Festival with Istgah Orchestra- 2019."
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Milad Tower"
            time="2015"
            address="Tehran"
            work=" Performance at the sixth closing of the Computer Games Festival, Milad Tower Convention Center - 2015."
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Vahdat Hall"
            time="1995-1996"
            address="Tehran"
            work="Holding a joint concert with the late Nasser Cheshm Azar in Vahdat Hall with the singing of Ashkan Khatibi - years 1995-1996."
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="hall of the Ministry of Interior"
            time="2019"
            address="Tehran"
            work="Cooperation with Richard Clayderman, the famous French musician, for six nights in the 2700-seat hall of the Ministry of Interior - 2019 "
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Rudaki Hall"
            time="2019"
            address="Tehran"
            work="Performing choir and classical pieces for two nights in the Rudaki Hall - 2019"
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Espinas Palace"
            time="2018"
            address="Tehran"
            work="Cooperation in the musical show of the Bride of the Dead Theater for 20 nights, 2400 seats in Espinas Palace - 2018"
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Vahdat Hall"
            time="2019"
            address="Tehran"
            work="Participation in the Mary Poppins musical show for 50 nights at Vahdat Hall - 2019"
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Italian Embassy"
            time="2021"
            address="Tehran"
            work="Holding a joint concert with Dino DePalma, a famous Italian musician, at the Italian Embassy - 2021"
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Philippine Embassy"
            time="2021"
            address="Tehran"
            work="Cooperation with the Philippine Embassy in the 123rd Independence Day of the Philippines - 2021"
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Japanese Embassy"
            time="2021"
            address="Tehran"
            work="Cooperation with the Japanese Embassy, on the occasion of the celebration of the King of Japan - 2022"
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Japanese Embassy"
            time="2021"
            address="Tehran"
            work="Holding a joint concert of the musicians of the station with the renowned pianist Mrs. Suako Kida from Japan - 2022"
          />

          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Sinol Hall"
            time="2021"
            address="Tehran"
            work="Holding Sin Dokht show for 20 nights in the Sinol Hall - 2022"
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Mexican Embassy"
            time="2021"
            address="Tehran"
            work="Cooperation with the Mexican Embassy on the occasion of the Feast of the Dead at the Mexican Embassy  - 2023"
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
