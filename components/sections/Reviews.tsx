const Reviews = () => {
    return ( 
        <>
        <section id="reviews" className="w-screen bg-white py-16 px-10">
            <header className="mb-10 text-center">
                <h2 className="text-4xl text-offBlack mb-2">What Our Guests Say</h2>
                <p className="text-base text-offBlack">Hear from guests who have experienced The Palm Haven Hotel.</p>
            </header>
            <div className="flex flex-wrap gap-8 justify-center">
                <div className="bg-offWhite rounded-lg shadow-md p-8 max-w-md w-full">
                    <p className="text-lg text-gray-700 mb-4">
                    “Absolutely wonderful stay! The staff were attentive and the rooms were spotless. I will definitely return.”
                    </p>
                    <div className="flex items-center">
                        <span className="font-bold text-accent mr-2">— Sarah O.</span>
                        <span className="text-yellow-400">★★★★★</span>
                    </div>
                </div>
                <div className="bg-offWhite rounded-lg shadow-md p-8 max-w-md w-full">
                    <p className="text-lg text-gray-700 mb-4">
                    “The Palm Haven Hotel exceeded my expectations. The pool and spa were highlights of my trip!”
                    </p>
                    <div className="flex items-center">
                        <span className="font-bold text-accent mr-2">— James K.</span>
                        <span className="text-yellow-400">★★★★★</span>
                    </div>
                </div>
                <div className="bg-offWhite rounded-lg shadow-md p-8 max-w-md w-full">
                    <p className="text-lg text-gray-700 mb-4">
                    “A perfect blend of luxury and comfort. The food at the restaurant was delicious and the service was top-notch.”
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