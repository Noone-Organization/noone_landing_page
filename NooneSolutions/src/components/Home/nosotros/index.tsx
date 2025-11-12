"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";
const Nosotros = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  const nosotros = [
    {
      icon: "/images/icons/icon-nosotros-02.svg",
      text: "Somos un equipo interdisciplinario de profesionales con experiencia en el diseño y desarrollo de soluciones tecnológicas aplicadas a la industria, medicina, agricultura y servicios.",
    },
    {
      icon: "/images/icons/icon-nosotros-01.svg",
      text: "Nuestra experiencia nos convierte en el socio ideal, tanto para convertir tu idea en un prototipo, como así también, para convertir el prototipo en un producto de fabricación masiva.",
    },
  ];

  return (
    <section className="pt-12 sm:pt-28 md:pt-48 relative" id="nosotros" style={{ paddingTop: '0rem' }}>
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative">
        <div className="text-center"></div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 items-center gap-x-10 gap-y-14 md:gap-x-20 md:gap-y-20">
          <motion.div {...TopAnimation}
            className="col-span-1 md:col-span-6 space-y-8"
          >
            <h2 className="text-30 sm:text-40 text-white font-medium">
              Nosotros
            </h2>
            <div className="grid gap-7">
              {nosotros.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="px-4 py-4 bg-primary bg-opacity-30 rounded-full flex-shrink-0">
                    <Image
                      src={`${getImagePrefix()}${item.icon}`}
                      alt={`${item.text} icon`}
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-14 sm:text-16 text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...bottomAnimation} className="col-span-1 md:col-span-6 relative" >
            <div className="absolute w-96 h-96 bg-gradient-to-bl from-primary from-50% to-primary to-40% blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <Image
                src={`${getImagePrefix()}images/nosotros/fondo_nosotros.png`}
                alt="Fondo nosotros"
                width={600}
                height={600}
                className="object-cover object-center rounded-xl md:rounded-none"
              />
            </div>
            <div className="relative z-10 mt-10 md:m-16 flex md:justify-end">
              <div className="bg-darkmode bg-opacity-90 px-6 py-8 sm:px-10 sm:py-10 rounded-2xl md:rounded-3xl border-2 border-opacity-20 border-section">
                <h2 className="text-white text-24 sm:text-30 mb-6">
                  Características distintivas
                </h2>
                {[
                  {
                    title: "Flexibilidad",
                    text: "Te acompañamos desde la etapa de prototipado hasta diseños de producción de gran volúmen.",
                  },
                  {
                    title: "Responsabilidad",
                    text: "Nos encargamos de tu proyecto, para que puedas olvidarte de las preocupaciones y enfocarte en lo que realmente importa.",
                  },
                  {
                    title: "Comunicación",
                    text: "Mantenemos canales de comunicación constantes para que estés al tanto de nuestro progreso en todo momento.",
                  },
                  {
                    title: "Robustez y escalabilidad",
                    text: "Nuestro foco es desarrollar productos que puedan crecer en el largo plazo.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 mt-6">
                    <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm p-3 rounded-full flex-shrink-0">
                      <Image
                        src={`${getImagePrefix()}images/nosotros/icon-nosotros-caracteristicas.svg`}
                        alt={item.title}
                        width={28}
                        height={28}
                      />
                    </div>
                    <div className="text-left">
                      <h5 className="text-muted text-16 sm:text-16">
                        {item.title}
                      </h5>
                      <p className="text-12 sm:text-12 text-muted text-opacity-60">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
