import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { useTranslation } from "@/hooks/useTranslation";
const Details = ({ position, Title, company, companyLink, time, address, work }) => {
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
          <div>{t(Title)}</div>

          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            <span className="text-red-500">{t("Place")}: </span>@{t(company)}
          </a>  
          &nbsp;
          <div><span className="text-red-500">{t("Role")}: </span>{t(position)}&nbsp;</div>
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
            Title="30th Fajr International Music Festival"
            position="Music Director"
            company="30th Fajr International Music Festival"
            time="2014-2015"
            address="Tehran"
            work={t(`Work Of Fajr International Music Festival`)}
          />
          <Details
            companyLink="www.google.com"
            Title="Performance at Computer Games Festival closing"
            position="Orchestra Manager"
            company="Milad Tower"
            time="2016"
            address="Tehran"
            work={t(`Work Of Milad Tower`)}
          />
          <Details
            companyLink="www.google.com"
            Title="Joint concert with Nasser Cheshm Azar, Ashkan Khatibi"
            position="Music Director"
            company="Vahdat Hall"
            time="2017-2018"
            address="Tehran"
            work={t(`Work Of Nasser Cheshm Azar`)}
          />
          <Details
            companyLink="www.google.com"
            Title="Richard Clayderman"
            position="Orchestra Manager"
            company="hall of the Ministry of Interior"
            time="2018"
            address="Tehran"
            work={t(`Work Of Richard Clayderman`)}
          />
          <Details
            companyLink="www.google.com"
            Title="Two-night choir and classical performance"
            position="Music Director"
            company="Rudaki Hall"
            time="2019"
            address="Tehran"
            work={t(`Work Of choir`)}
          />
          <Details
            companyLink="www.google.com"
            Title="Corpse Bride"
            position="Music Director"
            company="Espinas Palace"
            time="2018"
            address="Tehran"
            work={t(`Work Of Corpse Bride`)}
          />
          <Details
            companyLink="www.google.com"
            Title="Mary Poppins"
            position="Music Director"
            company="Vahdat Hall"
            time="2019"
            address="Tehran"
            work={t(`Work Of Mary Poppins`)}
          />
          <Details
            companyLink="www.google.com"
            Title="Joint concert with Italian musician Dino DePalma"
            position="Designer, producer, Executive"
            company="Italian Embassy"
            time="2021"
            address="Tehran"
            work={t(`Work Of Dino DePalma`)}
          />
          <Details
            companyLink="www.google.com"
            Title="Philippines National Day – Cultural Music Direction"
            position="Music Designer & Artistic Director"
            company="Philippine Embassy"
            time="2021-2025"
            address="Tehran"
            work={t(`Work Of Philippine Embassy`)}
          />

          <Details
            companyLink="www.google.com"
            Title="Cooperation with Japanese Embassy for King's celebration"
            position="Music Director"
            company="Japanese Embassy"
            time="2021-2023"
            address="Tehran"
            work={t(`Work Of King of Japan`)}
          />

          <Details
            companyLink="www.google.com"
            Title="SINDOKHT Performance"
            position="Producer"
            company="Cinouvell Hall"
            time="2021"
            address="Tehran"
            work={t(`Work Of Sin Dokht`)}
          />

          <Details
            companyLink="www.google.com"
            Title="Cultural Diplomacy Through Music and Photography"
            position="Music Director"
            company="Mexican Embassy"
            time="2025"
            address="Tehran"
            work={t(`Work Of Mexican Embassy`)}
          />


        </ul>
      </div>
    </div>
  );
}

export default Experience;
