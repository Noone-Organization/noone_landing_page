"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";

const Inicio = () => {

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1" id="main-banner" >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24">
              <Image
                src= {`${getImagePrefix()}images/icons/icon-idea.svg`}
                alt="icon"
                width={40}
                height={40}
              />
              <p className="text-white sm:text-18 text-16 mb-0">
                Desarrollos electrónicos a tu medida
              </p>
            </div>
            <h1 className="font-medium lg:text-40 md:text-40 text-40 lg:text-start text-center text-white mb-10">
              Soluciones integrales que abarcan desde el hardware hasta el software que lo impulsa </h1>
            {/*<div className="flex items-center md:justify-start justify-center gap-8">
              <button
                className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50"
                onClick={() => setIsBuyingOpen(true)}
              >
                Buy Crypto
              </button>
              <button
                className="bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7"
                onClick={() => setIsSellingOpen(true)}
              >
                Sell Crypto
              </button>
            </div>
            
            <div className="flex items-center md:justify-start justify-center gap-12 mt-20">
              <Link href="#" className="hover:scale-110 duration-300">
                <Image
                  src={`${getImagePrefix()}images/header/banner_inicio.png`}
                  alt="Play Store"
                  width={240}
                  height={70}
                />
              </Link>
              <Link href="#" className="hover:scale-110 duration-300">
                <Image
                  src= {`${getImagePrefix()}images/hero/applestore.png`}
                  alt="App Store"
                  width={240}
                  height={70}
                />
              </Link>
            </div>*/}  
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="col-span-7 lg:block hidden"
          >
            <div className="ml-20 -mr-64">
              <Image
                src= {`${getImagePrefix()}images/header/manos-banner-inicial.png`}
                alt="Banner"
                width={1150}
                height={1150}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-primary from-50% to-charcoalGray to-40% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default Inicio;
