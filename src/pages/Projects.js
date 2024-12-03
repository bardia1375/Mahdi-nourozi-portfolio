import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

import Project1 from "../../public/images/projects/testimg.png";
import Project2 from "../../public/images/projects/korea.png";
import { useTranslation } from "@/hooks/useTranslation";

const FeatureProject = ({
  title,
  summary1,
  summary2,
  summary3,
  summary4,
  summary5,
  summary6,
  summary7,
  summary8,
  type,
  link,
  img,
}) => {
  const { language } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // End state when in view
      transition={{ duration: 0.5 }} // Animation duration
      viewport={{ once: true }} // Trigger only once
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid light:border-light bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 shadow-custom"
    >
      <Link
        href={link}
        target="_blank"
        className="w-[40%] cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <img
          src={
            title === "VIRTUAL PERFORMANCES"
              ? "/images/projects/korea.png"
              : "/images/projects/testimg.png"
          }
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div
        dir={language == "fa" ? "rtl" : "ltr"}
        className="w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6"
      >
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-sm ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light text-sm text-justify">
          {summary1}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light text-sm text-justify">
          {summary2}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light text-sm text-justify">
          {summary3}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light text-sm text-justify">
          {summary4}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light text-sm text-justify">
          {summary5}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light text-sm text-justify">
          {summary6}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light text-sm text-justify">
          {summary7}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light text-sm text-justify">
          {summary8}
        </p>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { language, t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Projects Page")}</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={t("Projects Page")}
            className=" mb-16 lg:!text-7xl  sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          {language == "en" ? (
            <div className="grid grid-cols-12 gap-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0 ">
              <div className="col-span-12">
                <FeatureProject
                  title="VIRTUAL PERFORMANCES"
                  type={"Featured Project"}
                  summary1="• Virtual performance on the occasion of World Peace Day with 19 musicians from 10 different countries - year 2020"
                  summary2="• Virtual performance on the occasion of the birth of Christ with 21 musicians from 12 different countries - 2020"
                  summary3="• Production of the music video of Boyer Ahmadi's song with the presence of 19 musicians in collaboration with Farhang Foundation in California - 99"
                  summary4="• Production of the music video of Shkoufeh piece with the presence of 23 musicians and singers in collaboration with Culture Foundation in California - year 1400"
                  summary5="• Production of the music video of Person Person with the participation of 6 musicians and singers in collaboration with the Culture Foundation in California - 1400"
                  summary6="• Production of a video on the occasion of the International Day of Peace with the presence of seven children of different nationalities - 2021"
                  summary7="• Attending 6 UN virtual meetings and live music performance - 1400-99"
                  summary8="• Joint performance with the Austrian Cultural Association at the Austrian Embassy on the occasion of World Children's Day - 1401"
                  link="/"
                  img={Project1}
                />
              </div>
              <div className="col-span-12">
                <FeatureProject
                  title="CONTENT PRODUCTION"
                  type={"Featured Project"}
                  summary1="• Production of visual and musical content on the occasion of World Food Day with a musician from America"
                  summary2="• Production of visual and musical content on the occasion of International Children's Day"
                  summary3="• Production of visual and musical content on the occasion of the day of fighting against violence against women"
                  summary4="• Hafez Khoani project by Iranian literature lovers, on the occasion of Yalda night from 9 different countries"
                  summary5="• Production of visual and musical content on the occasion of International Laughter Day"
                  summary6="• Production of 6 episode podcasts of the radio station with the theme of keywords"
                  summary7="• Production of visual and musical content on the occasion of International Women's Day"
                  summary8="• Production of visual and musical content on the occasion of World Book and Copyright Day"
                  link="/"
                  img={Project2}
                />
              </div>{" "}
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0">
              <div className="col-span-12">
                <FeatureProject
                  title="اجرای مجازی"
                  type={"پروژه ویژه"}
                  summary1="• اجرای مجازی به مناسبت روز جهانی صلح با حضور ۱۹ نوازنده از ۱۰ کشور مختلف - سال ۲۰۲۰"
                  summary2="• اجرای مجازی به مناسبت میلاد مسیح با حضور ۲۱ نوازنده از ۱۲ کشور مختلف - سال ۲۰۲۰"
                  summary3="• تولید موزیک ویدئوی آهنگ بویر احمدی با حضور ۱۹ نوازنده با همکاری بنیاد فرهنگ در کالیفرنیا - سال ۱۳۹۹"
                  summary4="• تولید موزیک ویدئوی قطعه شکوفه با حضور ۲۳ نوازنده و خواننده با همکاری بنیاد فرهنگ در کالیفرنیا - سال ۱۴۰۰"
                  summary5="• تولید موزیک ویدئوی قطعه پرسن پرسن با حضور ۶ نوازنده و خواننده با همکاری بنیاد فرهنگ در کالیفرنیا - سال ۱۴۰۰"
                  summary6="• تولید ویدئویی به مناسبت روز جهانی صلح با حضور ۷ کودک از ملیت‌های مختلف - سال ۲۰۲۱"
                  summary7="• حضور در ۶ نشست مجازی سازمان ملل و اجرای زنده موسیقی - سال‌های ۱۳۹۹-۱۴۰۰"
                  summary8="• اجرای مشترک با انجمن فرهنگی اتریش در سفارت اتریش به مناسبت روز جهانی کودک - سال ۱۴۰۱"
                  link="/"
                  img={Project1}
                />
              </div>
              <div className="col-span-12">
                <FeatureProject
                  title="تولید محتوا"
                  type={"پروژه ویژه"}
                  summary1="• تولید محتوای تصویری و موسیقی به مناسبت روز جهانی غذا با حضور یک نوازنده از آمریکا"
                  summary2="• تولید محتوای تصویری و موسیقی به مناسبت روز جهانی کودک"
                  summary3="• تولید محتوای تصویری و موسیقی به مناسبت روز مبارزه با خشونت علیه زنان"
                  summary4="• پروژه حافظ‌خوانی توسط دوستداران ادبیات ایران، به مناسبت شب یلدا از ۹ کشور مختلف"
                  summary5="• تولید محتوای تصویری و موسیقی به مناسبت روز جهانی دختر"
                  summary6="• تولید ۶ قسمت پادکست از رادیو با موضوع کلمات کلیدی"
                  summary7="• تولید محتوای تصویری و موسیقی به مناسبت روز جهانی زن"
                  summary8="• تولید محتوای تصویری و موسیقی به مناسبت روز جهانی کتاب و حق چاپ"
                  link="/"
                  img={Project2}
                />
              </div>
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default Projects;
