import ContactForm from "../ui/ContactForm";

const ContactUs = () => {
    return ( 
        <>
        <section className="h-max sm:h-150 w-full px-4 sm:px-10 py-10">
            <div className="h-full w-full flex flex-col sm:flex-row bg-background rounded p-5 gap-10">
                <div className="w-full sm:w-[40%] h-full flex flex-col justify-between gap-5">
                    <h3 className="text-xl font-bold text-primary">CONTACT US</h3>
                    <h2 className="text-2xl font-bold text-header">Get In Touch With Us</h2>
                    <div className="h-[75%] w-full">
                        <ContactForm />
                    </div>
                </div>
                <div className="w-full sm:w-[60%] h-full flex flex-col sm:flex-row gap-3">
                    <div className="h-full w-full sm:w-[50%] flex flex-col gap-5">
                        <h3 className="text-xl font-bold text-header">OUR CONTACT INFO</h3>
                        <p className="text-text">Have any question about HVAC services? Feel free to reach out to us!</p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg"><span><i className="fa fa-map-marker text-text"></i></span> Location</h3>
                                <p className="text-text">Lagos Island, Lagos, Nigeria</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg"><span><i className="fa fa-phone text-text"></i></span> Phone</h3>
                                <p className="text-text">+234 704 7880 486</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg"><span><i className="fa-regular fa-envelope text-text"></i></span> Email</h3>
                                <p className="text-text">info@joshlegend.com</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg"><span><i className="fa-solid fa-clock text-text"></i></span> Working Hours</h3>
                                <p className="text-text">Mon - Sat: 8am - 6pm<br />Emergency services available</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full sm:w-[50%]">
                        <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1234567890123!2d3.379205315316789!3d6.524379995123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf1234567890%3A0xabcdef1234567890!2sLagos%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890123" width="100%" height="300" className="border-0 rounded-xl h-full w-full" allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default ContactUs;