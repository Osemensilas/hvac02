'use client';

import Link from "next/link";

const Footer = () => {

    return ( 
        <>
        <footer className={`h-max w-screen px-10 py-10`}>
            <div className="h-max w-full flex sm:flex-row flex-col items-center justify-center border-b bordergrey pb-3 mb-3">
                <div className="h-max w-max sm:w-max flex flex-col items-center gap-3">
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