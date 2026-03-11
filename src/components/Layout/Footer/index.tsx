"use client";
import React, { FC } from "react";
import Link from "next/link";
import { getHeaderData } from "../Header/Navigation/menuData";
import Logo from "../Header/Logo";
import { useLanguage } from "@/context/LanguageContext";

const Footer: FC = () => {
  const { t } = useLanguage();
  const headerData = getHeaderData(t);

  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          
          <div className="lg:col-span-4 md:col-span-6 col-span-6">
            <Logo />
            <h3 className="text-white text-24 font-medium sm:mt-4 mt-3">
              2026 Copyright | NOONE
            </h3>
          </div>

          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link href={item.href} className="text-white hover:text-primary text-17">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
