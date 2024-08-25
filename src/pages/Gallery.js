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

const Project = ({ link, img, title, type }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // End state when in view
      transition={{ duration: 1 }} // Animation duration
      viewport={{ once: true }} // Trigger only once
      className="w-[100%] flex flex-col items-center justify-center rounded-2xl border border-bold bg-light p-6 relative text-primaryDarkdark:bg-dark dark:border-light xs:p-4 shadow-custom"
    >
      {/* <div className="absolute top-0.5 -right-2 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" /> */}
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-md font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-small text-dark">Description</p>
      </div>
    </motion.article>
  );
};

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Mahdi Nourozi</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Gallery"
            className=" mb-16 lg:!text-7xl  sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0">
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project3}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project1}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project2}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project3}
              />
            </div>

            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project4}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project5}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project6}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project7}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project9}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project10}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project11}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project12}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project13}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project14}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project15}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project8}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project16}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project17}
              />
            </div>
            <div className="col-span-3 md:col-span-12">
              <Project
                title="CONTENT PRODUCTION"
                type={"Featured Project"}
                link="/"
                img={Project18}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Gallery;
