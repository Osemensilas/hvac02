const ContactForm = () => {
    return ( 
        <>
        <form className="space-y-4 bg-backgroundLight p-5 rounded w-full h-full">
            <div className="h-max w-full flex gap-4">
                <input type="text" placeholder="Full Name" className="w-full h-10 px-3 border border-grey outline-none rounded text-sm" />
                <input type="email" placeholder="Your Email" className="w-full h-10 px-3 border border-grey outline-none rounded text-sm" />
            </div>
            <div className="h-max w-full flex gap-4">
                <input type="tel" placeholder="Phone Number" className="w-full h-10 px-3 border border-grey outline-none rounded text-sm" />
                <select className="w-full h-10 px-3 border border-grey outline-none rounded text-sm" title="Select Service">
                    <option>Select Service</option>
                    <option>AC Repair</option>
                    <option>AC Installation</option>
                    <option>AC Maintenance</option>
                    <option>General Contracting</option>
                </select>
            </div>
            <textarea placeholder="Your Message" className="min-w-full max-w-full p-3 border border-grey outline-none rounded h-28 text-sm" />
            <button type="submit" className="w-full bg-primary text-accent p-2 rounded font-semibold cursor-pointer">Send Now</button>
        </form>
        </>
     );
}
 
export default ContactForm;