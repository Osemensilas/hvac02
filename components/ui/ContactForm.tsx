const ContactForm = () => {
    return ( 
        <>
        <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full h-10 px-3 border border-grey outline-none rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full h-10 px-3 border border-grey outline-none rounded" />
            <select className="w-full h-10 px-3 border border-grey outline-none rounded" title="Select Service">
                <option>Select Service</option>
                <option>AC Repair</option>
                <option>AC Installation</option>
                <option>AC Maintenance</option>
                <option>General Contracting</option>
            </select>
            <textarea placeholder="Your Message" className="min-w-full max-w-full p-3 border border-grey outline-none rounded h-28" />
            <button type="submit" className="w-full bg-primary text-accent p-3 rounded font-semibold">Send Request</button>
        </form>
        </>
     );
}
 
export default ContactForm;