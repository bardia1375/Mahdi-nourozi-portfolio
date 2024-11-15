import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import Head from "next/head";
import profilePic from "../../public/images/profile/developer.png";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahdi Nourozi</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/* <TransitionEffect/> */}
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 ">
          <div className="flex  items-center justify-center w-full gap-32 lg:flex-col md:gap-2">
            <div className="w-1/2 md:w-full ">
              <Image
                src="/images/Gallery/secondPage.png"
                width={100}
                height={100}
                alt="codeBucks"
                className="rounded-full w-full h-auto lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2  flex flex-col  self-center lg:w-full lg:!text-left sm:text-center  ">
              <AnimatedText
                text="CEO and Founder of the Ambassador of Peace Istgah and the Istgah Orchestra"
                className=" !text-5xl !text-left mt-5 xl:!text-4xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <ul>
                <p className="my-2 text-base font-medium md:text-sm sm:text-xs">
                  Graduated from Tehran Conservatory of Music
                </p>
                <p className="text-base font-medium md:text-sm sm:text-xs">
                  Teaching in Tehran Conservatory (School of Music)
                </p>
              </ul>
              <div className="flex  items-center self-start mt-2 lg:self-center">
                <Link
                  href="./dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  dark:bg-light  dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href={"mailto:bardiashams1375@gmail.com"}
                  target="_blank"
                  className="ml-4 text-lg font-meduim capitalize text-dark underline dark:text-light  md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <img
            src={"/images/svgs/miscellaneous_icons_1.svg"}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
