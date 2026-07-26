import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/hooks/useTranslation";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";



export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="bg-dark">
      <Head className="bg-dark">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={` font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <LanguageProvider>
          <Navbar />
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </LanguageProvider>

        <Footer />
      </main>
    </div>
  );
}
