import { HeaderItem } from "@/types/menu";

export const getHeaderData = (t: (key: string) => string): HeaderItem[] => [
  { label: t("menu_nosotros"), href: "/#nosotros" },
  { label: t("menu_servicios"), href: "/#servicios" },
  { label: t("menu_proyectos"), href: "/#proyectos" },
  { label: t("menu_clientes"), href: "/#clientes" },
  { label: t("menu_contacto"), href: "/#contacto" },
];