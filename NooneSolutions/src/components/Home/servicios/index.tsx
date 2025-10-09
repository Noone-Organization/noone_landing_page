"use client";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const Servicios = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };
  return (
    <section className="md:pt-40 pt-9" id="servicios">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted sm:text-28 text-18 mb-9">
              Servicios
            </p>
            <h2 className="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20">
              Te acompañamos en todo el ciclo de vida del producto, desde la primera idea hasta la implementación y soporte.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative -top-10">
              <div>
                <Image
                  src={`${getImagePrefix()}images/servicios/fondo_servicios.png`}
                  alt="Fondo servicios"
                  width={800}
                  height={800}
                  className="mx-auto"
                />
              </div>
              <div className="absolute lg::top-40 top-36 lg:left-0 -left-20 w-96 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-white mb-3" style={{ fontSize: '1.9rem' }}>
                    Consultoría
                  </h5>
                  <p className="text-14 text-muted text-opacity-60" style={{ fontSize: '1rem' }}>
                    Contanos cuál es tu idea o qué problema de tu proyecto te interesa resolver.
                    Nosotros te propondremos la mejor solución tecnológica. No es necesario que tengas conocimiento técnico!.
                  </p>
                </div>
                <div className="flex-shrink-0 w-20 h-20 bg-primary bg-opacity-45 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Image
                    src={`${getImagePrefix()}images/servicios/icon-consultoria.svg`}
                    alt="Consultoría"
                    width={44}
                    height={44}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              <div className="absolute lg:top-40 top-36 lg:right-0 -right-20 w-96 flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary bg-opacity-45 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Image
                    src={`${getImagePrefix()}images/servicios/icon-desarrollo-software.svg`}
                    alt="Desarrollo de Software"
                    width={44}
                    height={44}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-nowrap mb-3" style={{ fontSize: '1.9rem' }}>
                    Desarrollo de Software
                  </h5>
                  <p className="text-14 text-muted text-opacity-60" style={{ fontSize: '1rem' }}>
                    Programamos el firmware y software necesario para el funcionamiento de tu dispositivo.
                    Podemos encargarnos también del software de escritorio, mobile o web.
                  </p>
                </div>
              </div>

              <div className="absolute lg:bottom-56 bottom-52 lg:right-0 -left-0 w-96 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-white mb-3" style={{ fontSize: '1.9rem', lineHeight: '2rem'  }}>
                    Diseño, prototipado y testing
                  </h5>
                  <p className="text-14 text-muted text-opacity-60" style={{ fontSize: '1rem' }}>
                    Diseñamos los esquemas electrónicos y mecánicos.
                    Luego, creamos los primeros prototipos y realizamos pruebas para garantizar un funcionamiento óptimo.
                  </p>
                </div>
                <div className="flex-shrink-0 w-20 h-20 bg-primary bg-opacity-45 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Image
                    src={`${getImagePrefix()}images/servicios/icon-diseño-prototipo-testing.svg`}
                    alt="Diseño, prototipado y testing"
                    width={44}
                    height={44}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              <div className="absolute lg:bottom-64 bottom-54 lg:right-0 -right-0 w-96 flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary bg-opacity-45 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Image
                    src={`${getImagePrefix()}images/servicios/icon-produccion-ensamblaje.svg`}
                    alt="Producción y ensamblaje"
                    width={44}
                    height={44}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-nowrap mb-3" style={{ fontSize: '1.9rem' }}>
                    Producción y ensamblaje
                  </h5>
                  <p className="text-14 text-muted text-opacity-60" style={{ fontSize: '1rem' }}>
                    Gestionamos la fabricación y ensamblaje de tu dispositivo.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-96 flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary bg-opacity-45 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Image
                    src={`${getImagePrefix()}images/servicios/icon-soporte.svg`}
                    alt="Soporte"
                    width={44}
                    height={44}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-white mb-3" style={{ fontSize: '1.9rem' }}>Soporte</h5>
                  <p className="text-14 text-muted text-opacity-60" style={{ fontSize: '1rem' }}>
                    Luego de entregar el producto final, ofrecemos también soporte post-lanzamiento.
                  </p>
                </div>
              </div>


            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
