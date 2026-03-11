"use client";
import Image from "next/image";
import { getProyectosData } from "@/app/api/data";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";
import { useLanguage } from "@/context/LanguageContext";

const Proyectos = () => {
  const { t } = useLanguage();

  const proyectosData = getProyectosData(t);

  return (
    <section className="md:pt-48 sm:pt-28 pt-12 relative" id="proyectos">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative">

        <div className="grid lg:grid-cols-2 items-center gap-20 relative z-10">

          {/* Imagen */}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:-ml-20"
          >
            <div className="mx-auto w-full max-w-[600px]">
              <Image
                src={`${getImagePrefix()}images/proyectos/img_portfolio.png`}
                alt="Portfolio"
                width={600}
                height={500}
                className="h-auto w-full"
                priority
              />
            </div>
          </motion.div>

          {/* Texto y tabla */}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="sm:text-28 text-18 text-muted mb-4">
              {t("proyectos_titulo")}
            </p>

            <table className="w-full sm:w-[80%]">
              <tbody>
                {proyectosData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-dark_border border-opacity-10"
                  >
                    <td className="py-5">
                      <div className="bg-primary p-4 rounded-full bg-opacity-20 w-fit">
                        <Image
                          src={`${getImagePrefix()}${item.image}`}
                          alt={item.title}
                          width={35}
                          height={35}
                        />
                      </div>
                    </td>

                    <td className="py-5">
                      <h4 className="text-muted sm:tex-21 text-18 ml-5">
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;