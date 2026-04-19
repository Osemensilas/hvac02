'use client';

import Image from "next/image";
import { useState } from "react";

const Gallery = () => {

    const [fullScreen, setFullScreen] = useState(false);
    const [fullScreenImg, setFullScreenImg] = useState("");

    const viewImage = (img: string) => {
        setFullScreen(true);
        setFullScreenImg(img);  
    };

    const removeFullScreen = () => {
        setFullScreen(false);
        setFullScreenImg("");
    };

    return ( 
        <>
        <section id="gallery" className="w-screen h-max bg-offWhite py-16 px-10">
            <header className="mb-10">
                <h2 className="text-3xl text-header mb-2 font-bold">Gallery</h2>
                <p className="text-base text-text">See some of the work we have handled across Lagos state</p>
            </header>
            <div className="w-full h-max">
                <div className="w-full h-max flex">
                    <div onClick={() => viewImage("/gallery5.jpg")} className="cursor-pointer w-3/5 sm:h-150 h-75 relative">
                        <Image src="/gallery5.jpg" fill alt="gallery1" className="object-fill" />
                    </div>
                    <div className="w-2/5 h-max flex flex-col">
                        <div onClick={() => viewImage("/gallery1.jpg")} className="cursor-pointer relative w-full sm:h-75 h-37.5">
                            <Image src="/gallery1.jpg" fill alt="gallery2" className="object-cover" />
                        </div>
                        <div onClick={() => viewImage("/gallery2.jpg")} className="cursor-pointer relative w-full sm:h-75 h-37.5">
                            <Image src="/gallery2.jpg" fill alt="gallery3" className="object-cover"/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex flex-row-reverse ">
                    <div onClick={() => viewImage("/gallery6.jpg")} className="cursor-pointer w-3/5 sm:h-150 h-75 relative">
                        <Image src="/gallery6.jpg" fill alt="gallery4" className="object-cover" />
                    </div>
                    <div className="w-2/5 h-max flex flex-col">
                        <div onClick={() => viewImage("/gallery3.jpg")} className="cursor-pointer relative w-full sm:h-75 h-37.5">
                            <Image src="/gallery3.jpg" fill alt="gallery5" className="object-cover" />
                        </div>
                        <div onClick={() => viewImage("/gallery4.jpg")} className="cursor-pointer relative w-full sm:h-75 h-37.5">
                            <Image src="/gallery4.jpg" fill alt="gallery6" className="object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section onClick={removeFullScreen} className={`bg-foreground/50 cursor-pointer h-screen w-screen fixed top-0 left-0 flex items-center justify-center z-50 px-4 sm:px-0
            ${fullScreen ? "" : "hidden"}
            `}>
            <div className="relative w-full h-[80vh] bg-header rounded overflow-hidden">
                <Image src={fullScreenImg} alt="Full Screen Image" fill className="object-contain" />
            </div>
        </section>
        </>
     );
}
 
export default Gallery;