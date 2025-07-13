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

const Project = ({ link, img, title, type, Description, height }) => {
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
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 w-full"
        >
          <h2 className="my-2  w-full text-center  text-md font-bold ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-small text-dark dark:text-light ">
          {Description}
        </p>
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
                title={t("Korean Embassodor")}
                type={"Featured Project"}
                link="/"
                img={
                  "/images/Gallery/Korean Embassy.svg"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>

            <div className="col-span-3 md:col-span-12">

              <Project
                title={t("Phillipin Embassodor")}
                type={"Featured Project"}
                link="/"
                height="30px"
                img={
                  "/images/Gallery/Phillipin2.svg"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>


            <div className="col-span-3 md:col-span-12">

              <Project
                title={t("Nazanin Bayati")}
                type={"Featured Project"}
                link="/"
                height="30px"
                img={
                  "/images/Gallery/NazaninBayati.svg"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("United Nations Medal")}
                type={"Featured Project"}
                link="/"
                img={
                  "/images/Gallery/سازمان ملل.png"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Brazil Embassodor")}
                type={"Featured Project"}
                link="/"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/Screenshot%201404-04-22%20at%2021.28.54.png"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>

            
            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("French Country")}
                type={"Featured Project"}
                link="/"
                height="100%"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/Screenshot%201404-04-22%20at%2021.25.00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6b96162b-d379-44a7-ae3f-e3cd178bbf19%2F20250713%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250713T181256Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d5bcf90a16e466348a4fadf424602fe1781ac0efd1a0629b502d55c5a6e3ed34"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("with mr.Siavash Shams")}
                type={"Featured Project"}
                link="/"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/siavash%20shams.jpg"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>


            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("United Nations Medal")}
                type={"Featured Project"}
                link="/"
                height="100%"
                img={
                  "/images/Gallery/Audition.svg"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Italian Embassodor")}
                type={"Featured Project"}
                link="/"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/Screenshot%201404-04-22%20at%2020.58.47.png"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Ambassador of Korea")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/korea1.webp"}
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>
            {/* <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Ambassador of Korea")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/phillipin.svg"}
                // Description={"Mr. Tsukada Tamaki"}
              />
            </div> */}
            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Ambassador of Italy")}
                type={"Featured Project"}
                link="/"
                img={
                  "https://mahdi-norouzi.storage.c2.liara.space/Untitled%20design%20%284%29.jpg"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Ambassador of the Philippines")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/korea2.webp"}
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">

              <Project
                title={t("Nikan Mammut Charity")}
                type={"Featured Project"}
                link="/"
                height="100%"
                img={
                  "/images/Gallery/Nikan.svg"
                }
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Ambassador of Japan")}
                type={"Featured Project"}
                link="/"
                img={"https://mahdi-norouzi.storage.c2.liara.space/Japon.jpg"}
              // Description={"Mr. Tsukada Tamaki"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Ambassador Of Mexico")}
                type={"Featured Project"}
                link="/"
                // Description={"Mexico National Day"}
                img={"/images/Gallery/1-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Head Of The Cultural Department")}
                type={"Featured Project"}
                link="/"
                // Description={"Turkish Embassy"}
                img={"/images/Gallery/2-min.png"}
              />
            </div>



            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Cultural Ambassodor Of Austrian Embassy")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/4-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("French Embassodor")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/6-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("First Secretary Of The Swiss Embassy")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/7-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title={t("Cultrual Embassodor Of Philippin")}
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/9-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/10-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/5-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/11-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/12-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/13-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/14-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/15-min.png"}
              />
            </div>
            {/* <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/8-min.png"}
              />
            </div> */}
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/16-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/17-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/18-min.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/gallary19.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={"/images/Gallery/gallary20.png"}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
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
