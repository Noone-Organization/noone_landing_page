"use client"
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_ID = "service_sr7senq";
const TEMPLATE_ID = "template_kwudm7z";
const PUBLIC_KEY = "plbIeDZWyZCft5skF";

const Contacto = () => {

  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    mensaje: "",
  });

  const enviarMensaje = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nombreCompleto: formData.nombreCompleto,
          name: formData.nombreCompleto,
          email: formData.email,
          message: formData.mensaje,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );
      toast.success("message sent");
      setFormData({ nombreCompleto: "", email: "", mensaje: "" });
    } catch {
      toast.error(t("contacto_error") || "Error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <section className="pt-12 sm:pt-24 md:pt-44 relative z-1" id="contacto">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="bg-gradient-to-br from-primary from-50% to-charcoalGray to-40% w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full sm:-bottom-80 bottom-0 blur-400 absolute sm:-left-48 opacity-60 z-0"></div>

        <div className="bg-section bg-opacity-10 px-6 sm:px-12 md:px-16 py-10 sm:py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 gap-6 sm:gap-10 relative overflow-hidden">

          <div className="col-span-12 mb-6 text-center sm:text-left">
            <p className="text-muted text-18 sm:text-28 mb-2">
              {t("contacto")}
              </p>
            <h2 className="text-white text-30 sm:text-40 font-medium mb-3">
              {t("contacto_titulo")}
            </h2>
            <p className="text-muted text-opacity-60 text-16 sm:text-18">
              {t("contacto_subtitulo")}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <form
              onSubmit={enviarMensaje}
              className="bg-dark bg-opacity-20 rounded-2xl w-full p-4 sm:p-6"
            >
              <div className="mb-4">
                <input
                  type="text"
                  placeholder={t("contacto_nombre")}
                  value={formData.nombreCompleto}
                  onChange={(e) =>
                    setFormData({ ...formData, nombreCompleto: e.target.value })
                  }
                  className="w-full rounded-md border border-dark_border border-opacity-60 bg-transparent px-4 py-3 sm:px-5 sm:py-3 text-white text-base outline-none placeholder:text-grey focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder={t("contacto_email")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-md border border-dark_border border-opacity-60 bg-transparent px-4 py-3 sm:px-5 sm:py-3 text-white text-base outline-none placeholder:text-grey focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  placeholder={t("contacto_mensaje")}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="w-full rounded-md border border-dark_border border-opacity-60 bg-transparent px-4 py-3 sm:px-5 sm:py-3 text-white text-base outline-none placeholder:text-grey focus:border-primary resize-none h-32 sm:h-36"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-primary w-full py-3 rounded-lg text-18 font-medium border border-primary hover:text-primary hover:bg-transparent transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "..." : t("contacto_boton")}
              </button>
            </form>
          </div>

          <div className="col-span-12 lg:col-span-6 w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.736703214584!2d-58.381590684771534!3d-34.60368478045992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6a9ed1f1ef%3A0xf7f1b1f7f1b1f7f1!2sBuenos%20Aires!5e0!3m2!1ses!2sar!4v1692627880000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Empresa"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contacto;