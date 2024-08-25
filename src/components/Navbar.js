import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";
const Navbar = () => {
  const router = useRouter();
  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5  group-hover:w-full transition-[width] ease duration-300  ${
            router.asPath === href ? "w-full" : "w-0"
          } `}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
      toggle();
      router.push(href);
    };
    return (
      <button
        href={href}
        className={`${className} relative group text-light dark:text-dark my-2`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5  group-hover:w-full transition-[width] ease duration-300  ${
            router.asPath === href ? "w-full" : "w-0"
          }dark:bg-light `}
        >
          &nbsp;
        </span>
      </button>
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex item-center justify-between dark:text-light  relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex flex-col justigy-center items-center hidden lg:flex fixed"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "-transition-y-0.5 my-0.5"
          }`}
        ></span>
      </button>
      <div className=" w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" target="_blank" title="Home" className="mr-4" />{" "}
          <CustomLink href="/about" title="about" className="mx-4" />{" "}
          <CustomLink href="/Projects" title="Projects" className="mx-4" />
          <CustomLink href="/Gallery" title="Gallery" className="ml-4" />
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
        <nav className="flex  item-center justify-center  flex-wrap gap-1">
          <motion.a
            href="https://x.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          ></motion.a>
          <motion.a
            href="https://x.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkdin.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw]  flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75  rounded-lg background-blur-md py-32
    "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              target="_blank"
              title="Home"
              className=""
              toggle={handleClick}
            />{" "}
            <CustomMobileLink
              href="/about"
              title="about"
              className=""
              toggle={handleClick}
            />{" "}
            <CustomMobileLink
              href="/Projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Gallery"
              title="Gallery"
              className=""
              toggle={handleClick}
            />
          </nav>
          <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
          </div>
          <nav className="flex item-center justify-center  flex-wrap gap-1">
            <motion.a
              href="https://x.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 rounded-full dark:bg-dark sm:mx-1"
            ></motion.a>
            <motion.a
              href="https://x.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://linkdin.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <div className="absolute right-0 top-2 translate-x-[-50%]">
        {/* <CustomMobileLink
          href="/about"
          title="about"
          className="text-dark"
          toggle={handleClick}
        /> */}
      </div>
    </header>
  );
};

export default Navbar;
