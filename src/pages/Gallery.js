import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useTranslation } from "@/hooks/useTranslation";

const CATEGORY_DIPLOMACY = "Diplomacy";
const CATEGORY_CONTENT = "Content Production";
const CATEGORY_HIGHLIGHTS = "Highlights";

const galleryItems = [
  {
    name: "Embassy of Spain",
    role: "Ambassador: Antonio Sánchez-Benedito Gaspar",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Spain.png",
    flag: "🇪🇸",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Embassy of Oman",
    role: "Ambassador: Sayyid Yarub Qahtan Al Busaidi",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Oman.png",
    flag: "🇴🇲",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Italian Embassy",
    role: "Ambassador: Paola Amadei",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Italy.png",
    flag: "🇮🇹",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Mexican Embassy",
    role: "Ambassador: Guillermo Puente Ordorica",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Mexic.png",
    flag: "🇲🇽",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Japan Embassy",
    role: "Ambassador: Tamaki Tsukada",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Japan.png",
    flag: "🇯🇵",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Mr. KimJunpyo",
    role: "Korean Ambassador",
    img: "/images/Gallery/ghorbani2.png",
    flag: "🇰🇷",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Saudi National Day",
    img: "/images/Gallery/saudiarabia.png",
    flag: "🇸🇦",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Mr. Ontalab Onalbai",
    role: "Ambassador of Kazakhstan",
    img: "/images/Gallery/khazakhestan.png",
    flag: "🇰🇿",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Mr. Tsukada Tamaki",
    role: "Japan Ambassador",
    img: "/images/Gallery/ghorbani1.png",
    flag: "🇯🇵",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Mr. KimJunpyo",
    role: "Korean Ambassador",
    img: "/images/Gallery/Korean Embassy.svg",
    flag: "🇰🇷",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Mr. Tsukada Tamaki",
    role: "Ambassador of Japan",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Japon.jpg",
    flag: "🇯🇵",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Mr. Roberto G. Manalo",
    role: "Philippine Ambassador",
    img: "/images/Gallery/Phillipin2.svg",
    flag: "🇵🇭",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Nazanin Bayati",
    role: "Actress",
    img: "/images/Gallery/nazaninBayati.svg",
    category: CATEGORY_HIGHLIGHTS,
  },
  {
    name: "United Nations Medal",
    role: "Award",
    img: "/images/Gallery/سازمان ملل.png",
    category: CATEGORY_HIGHLIGHTS,
  },
  {
    name: "Felipe Flores Pinto",
    role: "Brazil Ambassador",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Screenshot%201404-04-22%20at%2021.28.54.png",
    flag: "🇧🇷",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Paris",
    role: "City",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Screenshot%201404-04-22%20at%2021.25.00.png",
    category: CATEGORY_HIGHLIGHTS,
  },
  {
    name: "Mr. Siavash Shams",
    role: "Singer",
    img: "https://mahdi-norouzi.storage.c2.liara.space/siavash%20shams.jpg",
    category: CATEGORY_HIGHLIGHTS,
  },
  {
    name: "United Nations Medal",
    role: "Award",
    img: "/images/Gallery/Audition.svg",
    category: CATEGORY_HIGHLIGHTS,
  },
  {
    name: "H.E. Paola AMADEI",
    role: "Italian Ambassador",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Screenshot%201404-04-22%20at%2020.58.47.png",
    flag: "🇮🇹",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Ambassador of Korea",
    role: "Korean Ambassador",
    img: "/images/Gallery/korea1.webp",
    flag: "🇰🇷",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "H.E. Paola AMADEI",
    role: "Italian Ambassador",
    img: "https://mahdi-norouzi.storage.c2.liara.space/Untitled%20design%20%284%29.jpg",
    flag: "🇮🇹",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Ambassador of the Philippines",
    role: "Philippine Ambassador",
    img: "/images/Gallery/korea2.webp",
    flag: "🇵🇭",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Nikan Mammut Charity",
    role: "Charity Organization",
    img: "/images/Gallery/Nikan.svg",
    category: CATEGORY_HIGHLIGHTS,
  },
  {
    name: "Guillermo Puente Ordorica",
    role: "Ambassador Of Mexico",
    img: "/images/Gallery/1-min.png",
    flag: "🇲🇽",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Head Of The Cultural Department",
    role: "Turkish Cultural Department",
    img: "/images/Gallery/2-min.png",
    flag: "🇹🇷",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Cultural Ambassador Of Austrian Embassy",
    role: "Austrian Cultural Ambassador",
    img: "/images/Gallery/4-min.png",
    flag: "🇦🇹",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Nicolas ROCHE",
    role: "French Ambassador",
    img: "/images/Gallery/6-min.png",
    flag: "🇫🇷",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "First Secretary Of The Swiss Embassy",
    role: "Swiss Embassy",
    img: "/images/Gallery/7-min.png",
    flag: "🇨🇭",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "Cultural Ambassador Of Philippines",
    role: "Philippine Cultural Ambassador",
    img: "/images/Gallery/9-min.png",
    flag: "🇵🇭",
    category: CATEGORY_DIPLOMACY,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/10-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/5-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/11-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/12-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/13-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/14-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/15-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/16-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/17-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/18-min.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/gallary19.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/gallary20.png",
    category: CATEGORY_CONTENT,
  },
  {
    name: "CONTENT PRODUCTION",
    role: "Content Production",
    img: "/images/Gallery/gallary21.png",
    category: CATEGORY_CONTENT,
  },
];

const GRID_SIZES =
  "(max-width: 479px) 45vw, (max-width: 1023px) 45vw, (max-width: 1279px) 30vw, 22vw";

const GalleryCard = ({ item, index, onOpen }) => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      viewport={{ once: true, margin: "-40px" }}
      className="list-none"
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={item.name}
        className="group relative block w-full overflow-hidden rounded-2xl border border-dark/10 bg-light text-left shadow-custom outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary dark:border-light/15 dark:bg-dark dark:focus-visible:ring-primaryDark sm:rounded-xl"
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <div
            className={`absolute inset-0 bg-dark/5 dark:bg-light/5 ${
              loaded ? "opacity-0" : "animate-pulse opacity-100"
            } transition-opacity duration-500`}
          />
          <Image
            src={item.img}
            alt={item.name}
            fill
            sizes={GRID_SIZES}
            onLoadingComplete={() => setLoaded(true)}
            className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.06] ${
              loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
            }`}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:opacity-100" />

          {item.flag && (
            <span className="absolute left-3 top-3 rounded-full bg-light/80 px-2.5 py-1 text-base leading-none shadow-sm backdrop-blur-md dark:bg-dark/70 sm:left-2 sm:top-2 sm:px-2 sm:text-sm">
              {item.flag}
            </span>
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-4 text-light opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:translate-y-0 lg:opacity-100 sm:p-3">
            <h2 className="text-base font-bold leading-tight drop-shadow-md sm:text-xs">
              {item.name}
            </h2>
            {item.role && (
              <p className="mt-1 text-xs font-medium text-light/80 drop-shadow-md sm:text-[10px]">
                {t(item.role)}
              </p>
            )}
          </div>
        </div>
      </button>
    </motion.li>
  );
};

const Lightbox = ({ items, index, onClose, onPrev, onNext }) => {
  const { t } = useTranslation();
  const item = items[index];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark/90 p-6 backdrop-blur-md sm:p-3"
    >
      <div className="absolute right-5 top-5 flex items-center gap-3 sm:right-3 sm:top-3">
        <span className="rounded-full bg-light/10 px-3 py-1 text-sm text-light/80">
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-light/10 text-2xl text-light transition-colors hover:bg-light/25"
        >
          ×
        </button>
      </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.x < -80) onNext();
          if (info.offset.x > 80) onPrev();
        }}
        onClick={(event) => event.stopPropagation()}
        className="relative flex h-[75vh] w-full max-w-5xl cursor-grab items-center justify-center active:cursor-grabbing sm:h-[60vh]"
      >
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="100vw"
          priority
          className="select-none object-contain"
        />
      </motion.div>

      <div
        onClick={(event) => event.stopPropagation()}
        className="mt-6 max-w-2xl text-center text-light sm:mt-4"
      >
        <h3 className="text-xl font-bold sm:text-base">
          {item.flag ? `${item.flag} ` : ""}
          {item.name}
        </h3>
        {item.role && (
          <p className="mt-1 text-sm text-light/70 sm:text-xs">{t(item.role)}</p>
        )}
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-light/10 text-2xl text-light transition-colors hover:bg-light/25 sm:left-2 sm:h-9 sm:w-9 sm:text-lg"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-light/10 text-2xl text-light transition-colors hover:bg-light/25 sm:right-2 sm:h-9 sm:w-9 sm:text-lg"
      >
        ›
      </button>
    </motion.div>
  );
};

const Gallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = useMemo(
    () => ["All", CATEGORY_DIPLOMACY, CATEGORY_HIGHLIGHTS, CATEGORY_CONTENT],
    []
  );

  const visibleItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const openAt = useCallback((index) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null
          ? current
          : (current - 1 + visibleItems.length) % visibleItems.length
      ),
    [visibleItems.length]
  );
  const showNext = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null ? current : (current + 1) % visibleItems.length
      ),
    [visibleItems.length]
  );

  return (
    <>
      <Head>
        <title>Mahdi Nourozi | {t("Gallery")}</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="mb-16 flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={t("Gallery")}
            className="mb-8 !text-7xl sm:mb-6 sm:!text-6xl xs:!text-4xl"
          />

          <div className="mb-12 flex flex-wrap items-center justify-center gap-3 sm:mb-8 sm:gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveIndex(null);
                  }}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-200 sm:px-3.5 sm:py-1.5 sm:text-xs ${
                    isActive
                      ? "border-dark bg-dark text-light dark:border-light dark:bg-light dark:text-dark"
                      : "border-dark/20 bg-transparent text-dark hover:border-dark hover:bg-dark/5 dark:border-light/25 dark:text-light dark:hover:border-light dark:hover:bg-light/10"
                  }`}
                >
                  {t(category)}
                </button>
              );
            })}
          </div>

          <motion.ul
            layout
            className="grid grid-cols-4 gap-8 xl:grid-cols-3 xl:gap-6 lg:grid-cols-2 md:gap-5 sm:grid-cols-2 sm:gap-3"
          >
            {visibleItems.map((item, index) => (
              <GalleryCard
                key={`${item.img}-${index}`}
                item={item}
                index={index}
                onOpen={openAt}
              />
            ))}
          </motion.ul>
        </Layout>
      </main>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            items={visibleItems}
            index={activeIndex}
            onClose={close}
            onPrev={showPrev}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
