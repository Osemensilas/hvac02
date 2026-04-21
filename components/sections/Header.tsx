'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContactBtn from "../ui/ContactBtn";
import { useRouter } from "next/navigation";

const Header = () => {
  
  const pathName = usePathname();
  const router = useRouter();
  
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

  const gotoHomePage = () => {
    setOpenNav(false);
    router.push("/");
  }
  
  return(
    <>
      <header className={`w-screen flex
      ${openNav ? "fixed h-screen z-50" : "h-20 sm:h-30 items-center justify-between px-4 sm:px-10 z-20"}
      `}>
        <div className={`h-max sm:h-full w-full flex flex-col
        ${openNav ? "bg-accent w-4/5 h-full" : ""}
        `}>
          <div className={`h-1/2 w-full items-center justify-between
            ${openNav ? "hidden" : "sm:flex hidden"}
            `}>
            <div className="h-max w-max flex gap-2">
              <div className="h-max w-max flex items-center gap-3">
                <i className="fa-solid fa-phone text-primary text-base"></i>
                <p className="text-text text-base">+234 704 7880 486</p>
              </div>
              <div className="h-max w-max flex items-center gap-3">
                <i className="fa-solid fa-envelope text-primary text-base"></i>
                <p className="text-text text-base">info@joshlegend.com</p>
              </div>
            </div>
            <div className="h-max w-max">
              <ul className="h-max w-max flex items-center gap-4">
                <li className="h-max w-max bg-background/50 p-2 rounded-md">
                  <a href="#" target="_blank" title="facebook">
                    <i className="fa-brands fa-facebook text-xl text-primary"></i>
                  </a>
                </li>
                <li className="h-max w-max bg-background/50 p-2 rounded-md">
                  <a href="#" target="_blank" title="instagram">
                    <i className="fa-brands fa-instagram text-xl text-primary"></i>
                  </a>
                </li>
                <li className="h-max w-max bg-background/50 p-2 rounded-md">
                  <a href="#" target="_blank" title="twitter">
                    <i className="fa-brands fa-twitter text-xl text-primary"></i>
                  </a>
                </li>
                <li className="h-max w-max bg-background/50 p-2 rounded-md">
                  <a href="#" target="_blank" title="linkedin">
                    <i className="fa-brands fa-linkedin text-xl text-primary"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`h-1/2 flex
          ${openNav ? "relative w-4/5 bg-accent flex-col z-20 justify-star gap-4 p-4" : "w-full items-center justify-between"}
          `}>
            <div onClick={gotoHomePage} className="h-max w-max cursor-pointer">
              <h3 className="text-header text-xl sm:text-3xl font-bold cursor-pointer">JOSH<span className="text-primary">LEGEND</span></h3>
            </div>
            <ul className={`h-max w-max flex gap-4
            ${openNav ? "flex-col justify-start items-start" : "hidden sm:flex items-center"}
            `}>
              <li className="h-max w-max flex flex-col gap-1">
                <Link href={"/"} className={`text-base
                    ${pathName === "/" ? "text-primary" : "text-header"}
                    `}>Home</Link>
                <span className={`h-0.5 w-full
                    ${pathName === "/" ? "bg-primary" : ""}
                    `}></span>
              </li>
              <li className="h-max w-max">
                <Link href="/services" className={`flex flex-col gap-1
                ${pathName === "/services" ? "text-primary" : ""}
                `}>Services
                <span className={`w-full h-0.5
                ${pathName === "/services" ? "bg-primary" : ""}
                `}></span>
                </Link>
              </li>
              <li className="h-max w-max">
                <Link href="/about-me" className={`flex flex-col gap-1
                ${pathName === "/about-me" ? "text-primary" : ""}
                `}>About Me
                <span className={`w-full h-0.5
                ${pathName === "/about-me" ? "bg-primary" : ""}
                `}></span>
                </Link>
              </li>
              <li className="h-max w-max">
                <Link href="/contact-me" className={`flex flex-col gap-1
                ${pathName === "/contact-me" ? "text-primary" : ""}
                `}>Contact Me
                <span className={`w-full h-0.5
                ${pathName === "/contact-me" ? "text-primary" : ""}
                `}></span>
                </Link>
              </li>
            </ul>
            <div className={`h-max w-max items-center gap-3
            ${openNav ? "hidden" : "hidden sm:flex"}
            `}>
              <ContactBtn />
            </div>
          </div>
        </div>
        <div onClick={hideNav} className={`
        ${openNav ? "w-1/5 bg-foreground/50" : "hidden w-0"}
        `}></div>
        <div onClick={seeNav} className={`ham-container h-10 w-10 block sm:hidden
          ${openNav ? "hidden" : ""}
        `}>
          <div className="hamburger"></div>
        </div>
      </header>
    </>
  );
}

export default Header;