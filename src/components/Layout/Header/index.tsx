"use client";
import { useEffect, useRef, useState } from "react";
import { getHeaderData } from "./Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useLanguage } from "@/context/LanguageContext";
import { getImagePrefix } from "@/utils/utils";

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();  
  const headerData = getHeaderData(t);        
  const imagePrefix = getImagePrefix();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 ${
        sticky ? " shadow-lg bg-darkmode pt-5" : "shadow-none md:pt-14 pt-5"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <Logo />

          {/* ---- MENU DESKTOP ---- */}
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* ---- BOTONES DERECHA ---- */}
          <div className="flex items-center gap-4">

            {/* FLAGS */}
            <div className="hidden lg:flex items-center gap-2">
              <button onClick={() => setLang("es")}>
                <Image src={`${imagePrefix}images/flags/es.png`} width={24} height={24} alt="ES" className={`${lang === "es" ? "opacity-100" : "opacity-40"}`} />
              </button>

              <button onClick={() => setLang("en")}>
                <Image src={`${imagePrefix}images/flags/en.png`} width={24} height={24} alt="EN" className={`${lang === "en" ? "opacity-100" : "opacity-40"}`} />
              </button>

              <button onClick={() => setLang("de")}>
                <Image src={`${imagePrefix}images/flags/de.png`} width={24} height={24} alt="DE" className={`${lang === "de" ? "opacity-100" : "opacity-40"}`} />
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>

          </div>
        </div>

        {/* OVERLAY MOBILE */}
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}

        {/* ---- MOBILE MENU ---- */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <Logo />

            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              style={{ backgroundImage: `url('${imagePrefix}images/closed.svg')` }}
              aria-label="Close menu Modal"
            ></button>
          </div>

          {/* FLAGS MOBILE */}
          <div className="flex items-center gap-4 pl-4">
            <button onClick={() => setLang("es")}>
              <Image src={`${imagePrefix}images/flags/es.png`} width={28} height={28} alt="ES" className={`${lang === "es" ? "opacity-100" : "opacity-40"}`} />
            </button>
            <button onClick={() => setLang("en")}>
              <Image src={`${imagePrefix}images/flags/en.png`} width={28} height={28} alt="EN" className={`${lang === "en" ? "opacity-100" : "opacity-40"}`} />
            </button>
            <button onClick={() => setLang("de")}>
              <Image src={`${imagePrefix}images/flags/de.png`} width={28} height={28} alt="DE" className={`${lang === "de" ? "opacity-100" : "opacity-40"}`} />
            </button>
          </div>

          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} onNavigate={() => setNavbarOpen(false)} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
