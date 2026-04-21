'use client';

import Image from "next/image";
import { useState } from "react";
import ContactUs from "./ContactUs";
import ContactBtn from "../ui/ContactBtn";

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
        <section className="h-170 w-full px-10 py-10">
            <div className="h-full w-full flex gap-5 bg-background p-10 rounded">
                <div className="w-[30%] h-full flex flex-col gap-5">
                    <div className="h-[40%] w-full flex flex-col gap-3 items-start">
                        <h3 className="text-xl font-bold text-primary">OUR PROJECTS</h3>
                        <h2 className="text-2xl font-bold text-header">From Concept to Completion - Our HVAC Projects</h2>
                        <ContactBtn />
                    </div>
                    <div className="relative w-full h-[60%]" onClick={() => viewImage("/gallery5.jpg")}>
                        <Image src="/gallery5.jpg" alt="gallery1" fill className="object-cover rounded-xl" />
                    </div>
                </div>
                <div className="w-[70%] h-full flex gap-2">
                    <div className="w-[33%] h-full flex flex-col gap-2">
                        <div className="relative h-[60%] w-full" onClick={() => viewImage("/gallery1.jpg")}>
                            <Image src="/gallery1.jpg" alt="gallery2" fill className="object-cover rounded-xl" />
                        </div>
                        <div className="relative h-[40%] w-full" onClick={() => viewImage("/gallery2.jpg")}>
                            <Image src="/gallery2.jpg" alt="gallery3" fill className="object-cover rounded-xl"/>
                        </div>
                    </div>
                    <div className="w-[33%] h-full flex flex-col gap-2">
                        <div className="relative h-[40%] w-full" onClick={() => viewImage("/gallery3.jpg")}>
                            <Image src="/gallery3.jpg" alt="gallery4" fill className="object-cover rounded-xl" />
                        </div>
                        <div className="relative h-[60%] w-full" onClick={() => viewImage("/gallery4.jpg")}>
                            <Image src="/gallery4.jpg" alt="gallery5" fill className="object-cover rounded-xl"/>
                        </div>
                    </div>
                    <div className="w-[33%] h-full flex flex-col gap-2">
                        <div className="relative h-[60%] w-full" onClick={() => viewImage("/gallery6.jpg")}>
                            <Image src="/gallery6.jpg" alt="gallery6" fill className="object-cover rounded-xl" />
                        </div>
                        <div className="relative h-[40%] w-full" onClick={() => viewImage("/gallery7.jpg")}>
                            <Image src="/gallery7.jpg" alt="gallery7" fill className="object-cover rounded-xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section onClick={removeFullScreen} className={`bg-foreground/50 cursor-pointer h-screen w-screen fixed top-0 left-0 flex items-center justify-center z-50 px-4 sm:px-0
            ${fullScreen ? "" : "hidden"}
            `}>
            <div className="relative w-full h-[80vh] rounded overflow-hidden">
                <Image src={fullScreenImg} alt="Full Screen Image" fill className="object-contain rounded-xl" />
            </div>
        </section>
        </>
     );
}
 
export default Gallery;