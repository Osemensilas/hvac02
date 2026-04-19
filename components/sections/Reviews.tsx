const Reviews = () => {
    return ( 
        <>
        <section id="reviews" className="w-screen bg-white py-16 px-10">
            <header className="mb-10 text-center">
                <h2 className="text-3xl text-offBlack mb-2 font-bold">Hear from my clients</h2>
                <p className="text-base text-offBlack">Real experiences from our valued customers across Nigeria</p>
            </header>
            <div className="flex flex-wrap gap-8 justify-center">
                <div className="bg-offWhite rounded-lg shadow-md p-8 max-w-md w-full">
                    <p className="text-base text-gray-700 mb-4">
                    “They came through for me when my AC stopped working during the hot weather. Very fast response and professional service. Everything was fixed the same day. Highly recommended.”
                    </p>
                    <div className="flex items-center">
                        <span className="font-bold text-accent mr-2">— Sarah O.</span>
                        <span className="text-yellow-400">★★★★★</span>
                    </div>
                </div>
                <div className="bg-offWhite rounded-lg shadow-md p-8 max-w-md w-full">
                    <p className="text-base text-gray-700 mb-4">
                    ““I used them for AC installation in my apartment. The job was clean, affordable, and done exactly how I wanted it. I will definitely use them again for maintenance.”
                    </p>
                    <div className="flex items-center">
                        <span className="font-bold text-accent mr-2">— James K.</span>
                        <span className="text-yellow-400">★★★★★</span>
                    </div>
                </div>
                <div className="bg-offWhite rounded-lg shadow-md p-8 max-w-md w-full">
                    <p className="text-base text-gray-700 mb-4">
                    “Very reliable team. They explained the problem clearly before fixing my AC and didn’t overcharge me. It’s hard to find honest technicians like this in Lagos.”
                    </p>
                    <div className="flex items-center">
                        <span className="font-bold text-accent mr-2">— Linda M.</span>
                        <span className="text-yellow-400">★★★★★</span>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Reviews;