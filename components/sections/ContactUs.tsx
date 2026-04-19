import ContactForm from "../ui/ContactForm";

const ContactUs = () => {
    return ( 
        <>
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
                <p className="text-center text-gray-600 mb-10">
                Need AC repair, installation, or maintenance in Lagos Island? Contact us today for fast response and reliable service.
                </p>
                <div className="grid md:grid-cols-2 gap-10">
                    {/* LEFT SIDE */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg"><span><i className="fa fa-map-marker text-text"></i></span> Location</h3>
                            <p className="text-gray-600">Lagos Island, Lagos, Nigeria</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg"><span><i className="fa fa-phone text-text"></i></span> Phone</h3>
                            <p className="text-gray-600">+234 XXX XXX XXXX</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg"><span><i className="fa-brands fa-whatsapp text-text"></i></span> WhatsApp</h3>
                            <p className="text-gray-600">Click to chat instantly with our team</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg"><span><i className="fa-solid fa-clock text-text"></i></span> Working Hours</h3>
                            <p className="text-gray-600">Mon - Sat: 8am - 6pm<br />Emergency services available</p>
                        </div>
                        <div className="mt-6 font-semibold text-red-600">
                        🚨 Emergency AC Issue? Call or WhatsApp us now for instant response.
                        </div>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default ContactUs;