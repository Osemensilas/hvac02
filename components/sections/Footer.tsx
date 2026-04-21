'use client';

import Link from "next/link";

const Footer = () => {

    return ( 
        <>
        <footer className={`h-max w-screen px-10 py-10`}>
            <div className="h-max w-full flex sm:flex-row flex-col items-start justify-between border-b bordergrey pb-3 mb-3">
                <div className="h-max w-full sm:w-max flex flex-col items-center gap-3">
                    <h2 className="text-3xl font-bold text-header">JOSH<span className="text-primary">LEGEND</span></h2>
                    <div className="h-max w-max">
                        <ul className="hmax w-max flex items-center gap-4">
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="facebook icon">
                                    <i className="fa-brands fa-facebook text-2xl"></i>
                                </a>
                            </li>
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="instagram icon">
                                    <i className="fa-brands fa-instagram text-2xl"></i>
                                </a>
                            </li>
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="twitter icon">
                                    <i className="fa-brands fa-twitter text-2xl"></i>
                                </a>
                            </li>
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="linkedin icon">
                                    <i className="fa-brands fa-linkedin text-2xl"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-max w-full sm:w-max flex sm:flex-row flex-col gap-20">
                    <div className="h-max w-max">
                        <h3 className="text-xl font-bold text-header mb-3">Main Links</h3>
                        <ul className="h-max w-max flex flex-col items-start gap-2">
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/services"}>Service</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/shop-by-brand"}>About Us</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/pharmacy"}>Contact Us</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/pharmacy"}>Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="h-max w-max">
                        <h3 className="text-xl font-bold text-header mb-3">Services</h3>
                        <ul className="h-max w-max flex flex-col items-start gap-2">
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/ac-repairs"}>AC Repair</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/ac-maintenance"}>AC Maintenance</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/ac-installation"}>AC Installation</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/general-contracting"}>General Contracting</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="h-max w-max">
                        <h3 className="text-xl font-bold text-header mb-3">Contact Us</h3>
                        <ul className="h-max w-max flex flex-col items-start gap-2">
                            <li className="text-text flex items-center gap-2">
                                <span><i className="fa fa-map-marker text-text"></i></span>
                                <p className="text-text">Lagos Island, Lagos, Nigeria</p>
                            </li>
                            <li className="text-text flex items-center gap-2">
                                <span><i className="fa fa-phone text-text"></i></span>
                                <p className="text-text">+234 704 7880 486</p>
                            </li>
                            <li className="text-text flex items-center gap-2">
                                <span><i className="fa-solid fa-globe text-text"></i></span>
                                <p className="text-text">info@joshlegend.com</p>
                            </li>
                            <li className="text-text flex items-center gap-2">
                                <span><i className="fa fa-map-marker text-text"></i></span>
                                <p className="text-text">joshlegend.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-max w-full">
                <p className="text-center text-header text-sm">
                    &copy; {new Date().getFullYear()} Josh Legend. All rights reserved.
                </p>
                <div className="w-full h-max flex items-center justify-center mt-5 text-sm text-header gap-3">
                    <Link href={"/terms-of-use"}>Terms of Use</Link>
                    <Link href={"/privacy-policy"}>Privacy Policy</Link>
                    <Link href={"/legal"}>Legal</Link>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;