import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const clientes: {
  title: string;
  icon: string;
  width: number;
  height: number;
  padding: string;
  website?: string;
}[] = [
  {
    title: "Balancell",
    icon: "/images/clientes/logo-balancell.png",
    width: 260,
    height: 80,
    padding: "px-0 py-0",
    website: "https://balancell.com/",
  },
  {
    title: "Jeff Caylor",
    icon: "/images/clientes/logo-jeff-caylor.png",
    width: 260,
    height: 80,
    padding: "px-0 py-0",
    website: "https://www.jeffcaylor.com/",
  },
  {
    title: "PowerOn",
    icon: "/images/clientes/logo-poweron.png",
    width: 260,
    height: 80,
    padding: "px-0 py-0",
  },
  {
    title: "University Sydney",
    icon: "/images/clientes/logo-university-syndey.png",
    width: 260,
    height: 80,
    padding: "px-0 py-0",
    website: "https://www.sydney.edu.au/",
  },
];

export const proyectosData: { image: string; title: string }[] = [
  {
    image: "/images/proyectos/icon-proyectos.svg",
    title: "Firmware para conectar con InfluxDB utilizando ESPHome",
  },
  {
    image: "/images/proyectos/icon-proyectos.svg",
    title: "Software para actualizar controlador MIDI utilizando Windows y Macos",
  },
  {
    image: "/images/proyectos/icon-proyectos.svg",
    title: "Firmware para sensor CO2 utilizando InfluxDB",
  },
  {
    image: "/images/proyectos/icon-proyectos.svg",
    title: "Firmware para ESP32 para visualizar web de datos",
  },
  
  {
    image: "/images/proyectos/icon-proyectos.svg",
    title: "Software utilizando C++/Python para simulación de turbinas",
  },
];