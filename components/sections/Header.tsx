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
  
  return(
    <>
      <header className={`w-screen px-10
      ${openNav ? "fixed h-screen flex" : "h-30"}
      `}>
        <div className={`h-full flex items-center justify-between
        ${openNav ? "w-4/5" : "w-full"}
        `}>
          <div className="h-max w-max">
            <h3 className="text-header text-3xl">JOSH<span className="text-primary">LEGEND</span></h3>
          </div>
          <ul className="h-max w-max flex items-center gap-4">
            <li className="h-max w-max">
              <Link href="/" className={`flex flex flex-col gap-1
              ${pathName === "/" ? "text-primary" : ""}
              `}>Home
              <span className={`
              ${pathName === "/" ? "bg-primary" : ""}
              `}></span>
              </Link>
            </li>
            <li className="h-max w-max">
              <Link href="/services" className={`flex flex flex-col gap-1
              ${pathName === "/services" ? "text-primary" : ""}
              `}>Services
              <span className={`
              ${pathName === "/services" ? "bg-primary" : ""}
              `}></span>
              </Link>
            </li>
            <li className="h-max w-max">
              <Link href="/about-me" className={`flex flex flex-col gap-1
              ${pathName === "/about-me" ? "text-primary" : ""}
              `}>About Me
              <span className={`
              ${pathName === "/about-me" ? "bg-primary" : ""}
              `}></span>
              </Link>
            </li>
            <li className="h-max w-max">
              <Link href="/contact-me" className={`flex flex flex-col gap-1
              ${pathName === "/contact-me" ? "text-primary" : ""}
              `}>Home
              <span className={`
              ${pathName === "/contact-me" ? "text-primary" : ""}
              `}></span>
              </Link>
            </li>
          </ul>
          <div className="h-max w-max flex items-center gap-3">
            <p className="text-text text-base">+2349 054 060 454</p>
            <ContactBtn />
          </div>
        </div>
        <div className="block sm:hidden sm:w-0 w-1/5"></div>
        <div onClick={seeNav} className="ham-container block sm:hidden">
          <div className="hamburger"></div>
        </div>
      </header>
    </>
  );
}

export default Header;