import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

import Project1 from "../../public/images/Gallery/1-min.png";
import Project2 from "../../public/images/Gallery/2-min.png";
import Project3 from "../../public/images/Gallery/3-min.png";
import Project4 from "../../public/images/Gallery/4-min.png";
import Project5 from "../../public/images/Gallery/5-min.png";
import Project6 from "../../public/images/Gallery/6-min.png";
import Project7 from "../../public/images/Gallery/7-min.png";
import Project8 from "../../public/images/Gallery/8-min.png";

import Project9 from "../../public/images/Gallery/9-min.png";
import Project10 from "../../public/images/Gallery/10-min.png";
import Project11 from "../../public/images/Gallery/11-min.png";
import Project12 from "../../public/images/Gallery/12-min.png";
import Project13 from "../../public/images/Gallery/13-min.png";
import Project14 from "../../public/images/Gallery/14-min.png";
import Project15 from "../../public/images/Gallery/15-min.png";
import Project16 from "../../public/images/Gallery/16-min.png";
import Project17 from "../../public/images/Gallery/17-min.png";
import Project18 from "../../public/images/Gallery/18-min.png";
import TransitionEffect from "@/components/TransitionEffect";
import { useTranslation } from "@/hooks/useTranslation";

const Project = ({ link, img, name, role, type, Description, height, flag }) => {
  const { language, t } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // End state when in view
      transition={{ duration: 1 }} // Animation duration
      viewport={{ once: true }} // Trigger only once
      className="w-[100%] flex flex-col items-center justify-center rounded-2xl border border-bold bg-light p-6 relative text-primaryDarkdark:bg-dark dark:border-light dark:bg-dark dark:text-light xs:p-4 shadow-custom"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg relative aspect-[4/4]"
      >
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-center justify-between mt-4">
        <Link
          href={link}
          target="_blank"
          className="w-full hover:opacity-90 transition-opacity"
        >
          <div className="flex flex-col items-center space-y-1">
            {flag && <span className="text-2xl mb-1">{flag}</span>}
            {name && (
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {name}
              </h2>
            )}
            {role && (
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {role}
              </p>
            )}
          </div>
        </Link>
        {Description && (
          <p className="mt-3 text-sm text-center text-gray-600 dark:text-gray-400">
            {Description}
          </p>
        )}
      </div>
    </motion.article>
  );
};

const Gallery = () => {
  const { language, t } = useTranslation();

  return (
    <>
      <Head>
        <title>Mahdi Nourozi</title>
        <meta name="description" content="any description" />
      </Head>
      {/* <TransitionEffect/> */}

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={t("Gallery")}
            className=" mb-16 !text-7xl  sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0">
            <div className="col-span-3 md:col-span-12">
              <Project
                name="Mr. KimJunpyo"
                role={t("Korean Ambassador")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/Korean Embassy.svg"}
                flag="🇰🇷"
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="Mr. Tsukada Tamaki"
                role={t("Ambassador of Japan")}
                type={"Featured Project"}
                link="/"
                img={"https://mahdi-norouzi.storage.c2.liara.space/Japon.jpg"}
                flag="🇯🇵"
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="Mr. Roberto G. Manalo"
                role={t("Philippine Ambassador")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/Phillipin2.svg"}
                flag="🇵🇭"
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="Nazanin Bayati"
                role={t("Actress")}
                type={"Featured Project"}
                link="/"
                height="30px"
                img={"/images/Gallery/NazaninBayati.svg"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="United Nations Medal"
                role={t("Award")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/سازمان ملل.png"}
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="Felipe Flores Pinto"
                role={t("Brazil Ambassador")}
                type={"Featured Project"}
                link="/"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/Screenshot%201404-04-22%20at%2021.28.54.png"
                }
                flag="🇧🇷"
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="Paris"
                role={t("City")}
                type={"Featured Project"}
                link="/"
                height="100%"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/Screenshot%201404-04-22%20at%2021.25.00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6b96162b-d379-44a7-ae3f-e3cd178bbf19%2F20250713%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250713T181256Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d5bcf90a16e466348a4fadf424602fe1781ac0efd1a0629b502d55c5a6e3ed34"
                }
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="Mr. Siavash Shams"
                role={t("Singer")}
                type={"Featured Project"}
                link="/"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/siavash%20shams.jpg"
                }
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="United Nations Medal"
                role={t("Award")}
                type={"Featured Project"}
                link="/"
                height="100%"
                img={"/images/Gallery/Audition.svg"}
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="H.E. Paola AMADEI"
                role={t("Italian Ambassador")}
                type={"Featured Project"}
                link="/"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/Screenshot%201404-04-22%20at%2020.58.47.png"
                }
                flag="🇮🇹"
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="Ambassador of Korea"
                role={t("Korean Ambassador")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/korea1.webp"}
                flag="🇰🇷"
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="H.E. Paola AMADEI"
                role={t("Italian Ambassador")}
                type={"Featured Project"}
                link="/"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/Untitled%20design%20%284%29.jpg"
                }
                flag="🇮🇹"
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="Ambassador of the Philippines"
                role={t("Philippine Ambassador")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/korea2.webp"}
                flag="🇵🇭"
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="Nikan Mammut Charity"
                role={t("Charity Organization")}
                type={"Featured Project"}
                link="/"
                height="100%"
                img={"/images/Gallery/Nikan.svg"}
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="Guillermo Puente Ordorica"
                role={t("Ambassador Of Mexico")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/1-min.png"}
                flag="🇲🇽"
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="Head Of The Cultural Department"
                role={t("Turkish Cultural Department")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/2-min.png"}
                flag="🇹🇷"
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                name="Cultural Ambassador Of Austrian Embassy"
                role={t("Austrian Cultural Ambassador")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/4-min.png"}
                flag="🇦🇹"
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="Nicolas ROCHE"
                role={t("French Ambassador")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/6-min.png"}
                flag="🇫🇷"
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="First Secretary Of The Swiss Embassy"
                role={t("Swiss Embassy")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/7-min.png"}
                flag="🇨🇭"
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="Cultural Ambassador Of Philippines"
                role={t("Philippine Cultural Ambassador")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/9-min.png"}
                flag="🇵🇭"
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/10-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/5-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/11-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/12-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/13-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/14-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/15-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/16-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/17-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/18-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/gallary19.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/gallary20.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                name="CONTENT PRODUCTION"
                role={t("Content Production")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/gallary21.png"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Gallery;
