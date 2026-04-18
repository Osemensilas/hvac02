'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContactBtn from "@/components/ui/ContactBtn";

const Header = () => {
  
  const pathName = usePathname();
  
  const [openNav, setOpenNav] = useState(false);
  
  const seeNav = () => {
    if (openNav){
      setOpenNav(false);
    }else{
      setOpenNav(true);
    }
  }
  
  const hideNav = () => {
    setOpenNav(false);
  }
  
  return(
    <>
      <header className={`w-screen flex
      ${openNav ? "fixed h-screen" : "h-30 items-center justify-between px-4 sm:px-10 z-20"}
      `}>
        <div className={`h-full flex
        ${openNav ? "relative w-4/5 bg-accent flex-col z-20 justify-star gap-4 p-4" : "w-full items-center justify-between"}
        `}>
          <div className="h-max w-max">
            <h3 className="text-header text-xl sm:text-3xl font-bold">JOSH<span className="text-primary">LEGEND</span></h3>
          </div>
          <ul className={`h-max w-max flex gap-4
          ${openNav ? "flex-col justify-start items-start" : "hidden sm:block items-center"}
          `}>
            <li className="h-max w-max">
              <Link href="/" className={`flex flex flex-col gap-1
              ${pathName === "/" ? "text-primary" : ""}
              `}>Home
              <span className={`w-full h-[2px]
              ${pathName === "/" ? "bg-primary" : ""}
              `}></span>
              </Link>
            </li>
            <li className="h-max w-max">
              <Link href="/services" className={`flex flex flex-col gap-1
              ${pathName === "/services" ? "text-primary" : ""}
              `}>Services
              <span className={`w-full h-[2px]
              ${pathName === "/services" ? "bg-primary" : ""}
              `}></span>
              </Link>
            </li>
            <li className="h-max w-max">
              <Link href="/about-me" className={`flex flex flex-col gap-1
              ${pathName === "/about-me" ? "text-primary" : ""}
              `}>About Me
              <span className={`w-full h-[2px]
              ${pathName === "/about-me" ? "bg-primary" : ""}
              `}></span>
              </Link>
            </li>
            <li className="h-max w-max">
              <Link href="/contact-me" className={`flex flex flex-col gap-1
              ${pathName === "/contact-me" ? "text-primary" : ""}
              `}>Home
              <span className={`w-full h-[2px]
              ${pathName === "/contact-me" ? "text-primary" : ""}
              `}></span>
              </Link>
            </li>
          </ul>
          <div className={`h-max w-max flex items-center gap-3
          ${openNav ? "hidden" : "hidden"}
          `}>
            <p className="text-text text-base">+2349 054 060 454</p>
            <ContactBtn />
          </div>
        </div>
        <div onClick={hideNav} className={`
        ${openNav ? "w-1/5 bg-foreground/50" : "hidden w-0"}
        `}></div>
        <div onClick={seeNav} className={`ham-container block sm:hidden
          ${openNav ? "hidden" : ""}
        `}>
          <div className="hamburger"></div>
        </div>
      </header>
    </>
  );
}

export default Header;