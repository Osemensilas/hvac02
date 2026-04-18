const Gallery = () => {
    return ( 
        <>
        <section id="gallery" className="w-screen h-max bg-offWhite py-16 px-10">
            <header className="mb-10">
                <h2 className="text-4xl text-accent mb-2">Gallery</h2>
                <p className="text-base text-accent">Discover the beauty and elegance of The Palm Haven Hotel.</p>
            </header>
            <div className="w-full h-max">
                <div className="w-full h-max flex">
                    <div className="w-3/5 h-max">
                        <img src="/lobby.jpg" alt="Lobby" className="w-full sm:h-[600px] h-[300px]" />
                    </div>
                    <div className="w-2/5 h-max flex flex-col">
                        <img src="/suite.jpg" alt="Suite" className="w-full sm:h-[300px] h-[150px]"/>
                        <img src="/pool.jpg" alt="Pool" className="w-full sm:h-[300px] h-[150px]"/>
                    </div>
                </div>
                <div className="w-full h-max hidden sm:flex flex-row-reverse ">
                    <div className="w-3/5 h-max">
                        <img src="/resturant.jpg" alt="Restaurant" className="w-full" style={{height: '600px'}}/>
                    </div>
                    <div className="w-2/5 h-max flex flex-col">
                        <img src="/spa.jpg" alt="Spa" className="w-full" style={{height: '300px'}}/>
                        <img src="/garden.jpg" alt="Garden" className="w-full" style={{height: '300px'}}/>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Gallery;