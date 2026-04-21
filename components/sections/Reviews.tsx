'use client';

import { useState } from "react";
import Image from "next/image";

const Reviews = () => {

    const [activeReview, setActiveReview] = useState(0);

    return ( 
        <>
        <section className="h-max sm:h-100 w-full px-10">
            <div className="h-full w-full flex flex-col sm:flex-row bg-background gap-5 px-4 sm:px-10 py-10 rounded">
                <div className="relative w-full sm:w-[45%] h-[300px] sm:h-full">
                    <Image src="/happy-client.jpg" alt="Reviews image" fill className="object-cover rounded" />
                </div>
                <div className="h-full w-full sm:w-[55%] flex flex-col justify-between items-start gap-3 bg-background rounded">
                    <h3 className="text-xl font-bold text-primary">TESTIMONIALS</h3>
                    <h2 className="text-2xl font-bold text-header">Customer Review - Your Comfort is Our Priority</h2>
                    <div className="relative h-max w-full">
                        <div className={`bg-backgroundLight rounded-lg shadow-md p-8 max-w-md w-full
                            ${activeReview === 0 ? "block" : "hidden"}
                            `}>
                            <p className="text-base text-gray-700 mb-4">
                            “They came through for me when my AC stopped working during the hot weather. Very fast response and professional service. Everything was fixed the same day. Highly recommended.”
                            </p>
                            <div className="flex items-center">
                                <span className="font-bold text-header mr-2">— Sarah O.</span>
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                        </div>
                        <div className={`bg-backgroundLight rounded-lg shadow-md p-8 max-w-md w-full
                            ${activeReview === 1 ? "block" : "hidden"}
                            `}>
                            <p className="text-base text-gray-700 mb-4">
                            ““I used them for AC installation in my apartment. The job was clean, affordable, and done exactly how I wanted it. I will definitely use them again for maintenance.”
                            </p>
                            <div className="flex items-center">
                                <span className="font-bold text-header mr-2">— James K.</span>
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                        </div>
                        <div className={`bg-backgroundLight rounded-lg shadow-md p-8 max-w-md w-full
                            ${activeReview === 2 ? "block" : "hidden"}
                            `}>
                            <p className="text-base text-gray-700 mb-4">
                            “Very reliable team. They explained the problem clearly before fixing my AC and didn’t overcharge me. It’s hard to find honest technicians like this in Lagos.”
                            </p>
                            <div className="flex items-center">
                                <span className="font-bold text-header mr-2">— Linda M.</span>
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                        </div>
                        <div className="h-max w-full flex items-center gap-5 absolute top-[90%] left-[90%]">
                            <button type="button" className="cursor-pointer" title="btn">
                                <i className="fa-solid fa-chevron-left text-xl" onClick={() => setActiveReview((prev) => prev === 0 ? 2 : prev - 1)}></i>
                            </button>
                            <button type="button" className="ml-3 cursor-pointer" title="btn">
                                <i className="fa-solid fa-chevron-right text-xl" onClick={() => setActiveReview((prev) => prev === 2 ? 0 : prev + 1)}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Reviews;