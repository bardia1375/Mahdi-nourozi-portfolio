import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { useTranslation } from "@/hooks/useTranslation";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  const { t } = useTranslation();
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
          {t(position)}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{t(company)}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {t(time)} | {t(address)}
        </span>
        <p className="font-medium w-full">{t(work)}</p>
      </motion.div>
    </li>
  );
};
function Experience() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        {t("LIVE PERFORMANCES")}
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
            work={t(`Work Of Ivan Shams Hall`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Tehran University of Art"
            time="2019"
            address="Tehran"
            work={t(`Work Of Tehran University of Art`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Fajr International Music Festival"
            time="2019"
            address="Tehran"
            work={t(`Work Of Fajr International Music Festival`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Milad Tower"
            time="2015"
            address="Tehran"
            work={t(`Work Of Milad Tower`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Vahdat Hall"
            time="2016-2017"
            address="Tehran"
            work={t(`Work Of Nasser Cheshm Azar`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="hall of the Ministry of Interior"
            time="2019"
            address="Tehran"
            work={t(`Work Of Richard Clayderman`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Rudaki Hall"
            time="2019"
            address="Tehran"
            work={t(`Work Of choir`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Espinas Palace"
            time="2018"
            address="Tehran"
            work={t(`Work Of Corpse Bride`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Vahdat Hall"
            time="2019"
            address="Tehran"
            work={t(`Work Of Mary Poppins`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Italian Embassy"
            time="2021"
            address="Tehran"
            work={t(`Work Of Dino DePalma`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Philippine Embassy"
            time="2021"
            address="Tehran"
            work={t(`Work Of Philippine Embassy`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Japanese Embassy"
            time="2021"
            address="Tehran"
            work={t(`Work Of King of Japan`)}
          />

          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Japanese Embassy"
            time="2021"
            address="Tehran"
            work={t(`Work Of Suako Kida`)}
          />

          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Cinouvell Hall"
            time="2021"
            address="Tehran"
            work={t(`Work Of Sin Dokht`)}
          />
          <Details
            companyLink="www.google.com"
            position="Music Director"
            company="Mexican Embassy"
            time="2021"
            address="Tehran"
            work={t(`Work Of Mexican Embassy`)}
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
