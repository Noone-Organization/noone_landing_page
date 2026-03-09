'use client'
import { useEffect } from "react";
import type { ReactNode } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo
