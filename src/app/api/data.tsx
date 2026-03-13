export const footerlabels: { label: string; href: string }[] = [
  { label: "Terms", href: "#" },
  { label: "Disclosures", href: "#" },
  { label: "Latest News", href: "#" },
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
    icon: "images/clientes/logo-balancell.png",
    width: 260,
    height: 80,
    padding: "px-0 py-0",
    website: "https://balancell.com/",
  },
  {
    title: "Jeff Caylor",
    icon: "images/clientes/logo-jeff-caylor.png",
    width: 260,
    height: 80,
    padding: "px-0 py-0",
    website: "https://www.jeffcaylor.com/",
  },
  {
    title: "PowerOn",
    icon: "images/clientes/logo-poweron.png",
    width: 260,
    height: 80,
    padding: "px-0 py-0",
  },
  {
    title: "University Sydney",
    icon: "images/clientes/logo-university-syndey.png",
    width: 260,
    height: 80,
    padding: "px-0 py-0",
    website: "https://www.sydney.edu.au/",
  },
  {
    title: "TU Dresden",
    icon: "images/clientes/logo-tu-dresden.png",
    width: 260,
    height: 80,
    padding: "px-0 py-0",
    website: "https://tu-dresden.de/",
  },
];

export const getProyectosData = (t: (key: string) => string) => [
  {
    image: "images/proyectos/icon-proyectos.svg",
    title: t("proyectos_01"),
  },
  {
    image: "images/proyectos/icon-proyectos.svg",
    title: t("proyectos_02"),
  },
  {
    image: "images/proyectos/icon-proyectos.svg",
    title: t("proyectos_03"),
  },
  {
    image: "images/proyectos/icon-proyectos.svg",
    title: t("proyectos_04"),
  },
  {
    image: "images/proyectos/icon-proyectos.svg",
    title: t("proyectos_05"),
  },
];