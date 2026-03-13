"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { clientes } from "@/app/api/data";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";
import { useLanguage } from "@/context/LanguageContext";

const Clientes = () => {

  const { t } = useLanguage();

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <section className="md:pt-48 sm:pt-28 pt-12 pb-28 relative" id="clientes">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative">
        <div className="bg-gradient-to-br from-primary from-50% to-charcoalGray to-40% sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-2 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted sm:text-28 text-18 mb-9">
              {t("clientes")}
            </p>
            <h2 className="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20">
              {t("clientes_titulo")}
            </h2>
          </motion.div>
          <div className="lg:-mt-18 mt-18">
            <Slider {...settings}>
              {clientes.map((item, index) => (
                <div key={index} className="pr-6">
                  <div className="px-5 py-6 bg-dark_grey bg-opacity-80 rounded-xl overflow-hidden">
                    <div className="flex items-center justify-center">
                      {item.website ? (
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="block w-full">
                          <div className={`flex h-20 w-full items-center justify-center ${item.padding}`}>
                            <Image
                              src={`${getImagePrefix()}${item.icon}`}
                              alt={item.title}
                              width={item.width}
                              height={item.height}
                              className="h-auto max-h-[80px] w-auto max-w-full object-contain"
                            />
                          </div>
                        </a>
                      ) : (
                        <div className={`flex h-20 w-full items-center justify-center ${item.padding}`}>
                          <Image
                            src={`${getImagePrefix()}${item.icon}`}
                            alt={item.title}
                            width={item.width}
                            height={item.height}
                            className="h-auto max-h-[80px] w-auto max-w-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
