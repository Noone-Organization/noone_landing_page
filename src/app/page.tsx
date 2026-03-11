import React from "react";
import Inicio from "@/components/Home/inicio";
import Nosotros from "@/components/Home/nosotros";
import Servicios from "@/components/Home/servicios";
import Contacto from "@/components/Home/contacto";
import Proyectos from "@/components/Home/proyectos";
import Clientes from "@/components/Home/clientes";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Noone",
};

export default function Home() {
  return (
    <main>
      <Inicio />
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Clientes />
      <Contacto />
    </main>
  );
}
