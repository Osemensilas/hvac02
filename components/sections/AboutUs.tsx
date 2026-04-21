import ContactBtn from "../ui/ContactBtn";
import Image from "next/image";

const AboutUs = () => {
    return ( 
        <>
        <section className="h-max sm:h-100 w-full px-4 sm:px-10">
            <div className="h-full w-full flex flex-col sm:flex-row gap-5">
                <div className="h-full w-full sm:w-[60%] flex flex-col sm:flex-row gap-3 bg-background rounded p-4">
                    <div className="h-full w-full sm:w-[50%] flex flex-col justify-between gap-3">
                        <div className="h-max w-full bg-primary rounded p-4">
                            <div className="h-max w-full flex items-center gap-3">
                                <i className="fa-regular fa-face-smile text-yellow-500 text-xl"></i>
                                <h4 className="text-text font-semibold">Customer Centric Approach</h4>
                            </div>
                            <p className="text-text">We prioritize our customers&apos; needs and satisfaction in everything we do.</p>
                        </div>
                        <div className="h-max w-full bg-primary rounded p-4">
                            <div className="h-max w-full flex items-center gap-3">
                                <i className="fa-solid fa-certificate text-yellow-500 text-xl"></i>
                                <h4 className="text-text font-semibold">Quality Assurance</h4>
                            </div>
                            <p className="text-text">We maintain the highest standards of quality in all our work.</p>
                        </div>
                        <div className="h-max w-full bg-primary rounded p-4">
                            <div className="h-max w-full flex items-center gap-3">
                                <i className="fa-solid fa-leaf text-green-500 text-xl"></i>
                                <h4 className="text-text font-semibold">Sustainable Solutions</h4>
                            </div>
                            <p className="text-text">We are committed to providing environmentally friendly solutions for our customers.</p>
                        </div>
                    </div>
                    <div className="relative w-full sm:w-[50%] h-[300px] sm:h-full">
                        <Image src="/about.jpg" alt="about image" fill className="object-cover rounded" />
                    </div>
                </div>
                <div className="h-full w-full sm:w-[40%] flex flex-col justify-between items-between p-4 sm:p-10 bg-background rounded">
                    <h3 className="text-xl font-bold text-primary">About Us</h3>
                    <h2 className="text-2xl font-bold text-header">Creating Comfortable Spaces, One Home at a Time</h2>
                    <p className="text-base text-text">We are a team of experienced HVAC professionals dedicated to providing top-quality services to our customers. With years of experience and a commitment to excellence, we ensure that every project is completed to the highest standards.</p>
                    <div className="h-max w-max">
                        <ContactBtn />
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default AboutUs;