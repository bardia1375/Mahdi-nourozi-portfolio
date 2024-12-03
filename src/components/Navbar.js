import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useTranslation } from "@/hooks/useTranslation";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const { changeLanguage, language, t } = useTranslation();

  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5  group-hover:w-full transition-[width] ease duration-300  ${
            router.asPath === href ? "w-full" : "w-0"
          } dark:bg-light`}
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
        className={`w-full ${className} relative group text-light dark:text-dark py-2`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5  group-hover:w-full transition-[width] ease duration-300  ${
            router.asPath === href ? "w-full" : "w-0"
          } dark:bg-light`}
        >
          &nbsp;
        </span>
      </button>
    );
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header
      ref={navbarRef}
      className=" w-full px-32 py-8 font-medium flex item-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        className="flex flex-col justify-center items-center hidden lg:flex fixed  p-4 pt-1"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "-transition-y-0.5 my-0.5"
          }`}
        ></span>
      </button>
      <div
        dir={language === "fa" ? "rtl" : "ltr"}
        className="w-full flex justify-between items-center lg:hidden"
      >
        <nav>
          {" "}
          <CustomLink href="/" title={t("Home")} className="mr-4" />{" "}
          <CustomLink href="/about" title={t("About")} className="mx-4" />{" "}
          <CustomLink href="/Projects" title={t("Projects")} className="mx-4" />
          <CustomLink href="/Gallery" title={t("Gallery")} className="ml-4" />
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
        <nav className="flex items-center justify-center flex-wrap gap-1">
          <motion.a
            href="https://x.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="w-full  flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title={t("Home")}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={t("About")}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Projects"
              title={t("Projects")}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Gallery"
              title={t("Gallery")}
              className=""
              toggle={handleClick}
            />
          </nav>
          <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
          </div>
          <nav className="flex items-center justify-center flex-wrap gap-2 mt-2">
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
              href="https://linkedin.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
          </nav>
          <div className="flex gap-2 text-light dark:text-black mt-2 p-4 ">
            {language === "fa" && (
              <button
                onClick={() => {
                  changeLanguage("en"), setIsOpen(false);
                }}
              >
                En
              </button>
            )}
            {language === "en" && (
              <button
                onClick={() => {
                  changeLanguage("fa"), setIsOpen(false);
                }}
              >
                فارسی
              </button>
            )}
          </div>
        </motion.div>
      )}

      <button
        className={`absolute right-[24px] top-6 ml-3 flex items-center justify-center rounded-full p-1 ${
          mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      >
        {mode === "dark" ? (
          <SunIcon className={"fill-dark"} />
        ) : (
          <MoonIcon className={"fill-dark"} />
        )}
      </button>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <div className="flex gap-1 ml-4 md:hidden">
        {language === "fa" && (
          <button onClick={() => changeLanguage("en")}>En</button>
        )}
        {language === "en" && (
          <button onClick={() => changeLanguage("fa")}>Fa</button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
