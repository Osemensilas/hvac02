import Image from "next/image";

const Gallery = () => {
    return ( 
        <>
        <section id="gallery" className="w-screen h-max bg-offWhite py-16 px-10">
            <header className="mb-10">
                <h2 className="text-3xl text-header mb-2 font-bold">Gallery</h2>
                <p className="text-base text-text">See some of the work we have handled across Lagos state</p>
            </header>
            <div className="w-full h-max">
                <div className="w-full h-max flex">
                    <div className="w-3/5 sm:h-150 h-75 relative">
                        <Image src="/gallery5.jpg" fill alt="Lobby" className="object-fill" />
                    </div>
                    <div className="w-2/5 h-max flex flex-col">
                        <div className="relative w-full sm:h-75 h-37.5">
                            <Image src="/gallery1.jpg" fill alt="Suite" className="object-cover" />
                        </div>
                        <div className="relative w-full sm:h-75 h-37.5">
                            <Image src="/gallery2.jpg" fill alt="Pool" className="object-cover"/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max hidden sm:flex flex-row-reverse ">
                    <div className="w-3/5 sm:h-150 h-75 relative">
                        <Image src="/gallery6.jpg" fill alt="Restaurant" className="object-cover" />
                    </div>
                    <div className="w-2/5 h-max flex flex-col">
                        <div className="relative w-full sm:h-75 h-37.5">
                            <Image src="/gallery3.jpg" fill alt="Suite" className="object-cover" />
                        </div>
                        <div className="relative w-full sm:h-75 h-37.5">
                            <Image src="/gallery4.jpg" fill alt="Pool" className="object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Gallery;