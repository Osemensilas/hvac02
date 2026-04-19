'use client';

import { useState } from "react";

const ScheduleBtn = () => {

    const [showSchedule, setShowSchedule] = useState(false);
    const [error, setError] = useState<string>("");
    const [progress, setProgress] = useState(1);
    const [formHeader, setFormHeader] = useState<string>("Service Type");
    const [text, setText] = useState<string>("Please select a service type");
    const [nextText, setNextText] = useState<string>("Next");
    const [formData, setFormData] = useState({
        serviceType: "",
        serviceRequest: "",
        serviceDetailsOptions: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        date: "",
        time: "",
        note: "",
    });
    const [serviceDetails, setServiceDetails] = useState({
        systemAge: "",
        systemWorking: "",
    });

    const handleChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }

    const btnClicked = () => {
        setShowSchedule(true);
    }

    const removeSchedule = () => {
        setShowSchedule(false);
        setFormData({
            serviceType: "",
            serviceRequest: "",
            serviceDetailsOptions: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            date: "",
            time: "",
            note: "",
        });
        setServiceDetails({
            systemAge: "",
            systemWorking: "",
        });
        setProgress(1);
        setFormHeader("Service Type");
        setText("Please select a service type");
        setNextText("Next");
        setError("");
    }

    const serviceTypeClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        const service = e.currentTarget.value;
        setFormData({ ...formData, serviceType: service });
    }

    const serviceRequestClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        const service = e.currentTarget.value;
        setFormData({ ...formData, serviceRequest: service });
    }

    const serviceOptionClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        const service = e.currentTarget.value;
        setFormData({ ...formData, serviceDetailsOptions: service });
    }

    const systemAgeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const age = e.currentTarget.value;
        setServiceDetails({ ...serviceDetails, systemAge: age });
    }

    const systemWorkingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const working = e.currentTarget.value;
        setServiceDetails({ ...serviceDetails, systemWorking: working });
    }

    const prevClicked = () => {
        if (progress === 2) {
            setProgress(1);
            setFormHeader("Service Type");
            setText("Please select a service type");
            setNextText("Next");
        }

        if (progress === 3) {
            setProgress(2);
            setFormHeader("Service Request");
            setText("What kind of service do you need?");
            setNextText("Next");
        }

        if (progress === 4) {
            setProgress(3);
            setFormHeader("Service Details Options");
            setText("Please select the service details that best fit your needs");
            setNextText("Next");
        }

        if (progress === 5) {
            if (formData.serviceDetailsOptions === "inhome quote") {
                setProgress(3);
                setFormHeader("Service Details Options");
                setText("Please select the service details that best fit your needs");
                setNextText("Next");
                return;
            }
            setProgress(4);
            setFormHeader("Service Details");
            setText("Help us with these details to provide you with the best service");
            setNextText("Next");
        }

        if (progress === 6) {
            setProgress(5);
            setFormHeader("Customer Information");
            setText("Please fill in the required details and we will get back to you as soon as possible");
            setNextText("Next");
        }
    }

    const nxtClicked = () => {
        if (progress === 1) {

            if (!formData.serviceType) {
                setError("Please select a service type to proceed");
                return;
            }else{
                setError("");
            }
            setProgress(2);
            setFormHeader("Service Request");
            setText("What kind of service do you need?");
            setNextText("Next");
        }

        if (progress === 2) {
            if (!formData.serviceRequest) {
                setError("Please select a service request to proceed");
                return;
            }else{
                setError("");
            }
            setProgress(3);
            setFormHeader("Service Details Options");
            setText("Please select the service details that best fit your needs");
            setNextText("Next");
        }

        if (progress === 3) {
            if (!formData.serviceDetailsOptions) {
                setError("Please select a service details option to proceed");
                return;
            }else{
                setError("");
            }

            setNextText("Next");

            if (formData.serviceDetailsOptions === "online quote") {
                setProgress(4);
                setFormHeader("Service Details");
                setText("Help us with these details to provide you with the best service");
                return;
            }
            setProgress(5);
            setFormHeader("Customer Information");
            setText("Please fill in the required details and we will get back to you as soon as possible");
        }

        if (progress === 4) {
            if (!serviceDetails.systemAge || !serviceDetails.systemWorking) {
                setError("Please select a service details option to proceed");
                return;
            }else{
                setError("");
            }

            setProgress(5);
            setFormHeader("Customer Information");
            setText("Please fill in the required details and we will get back to you as soon as possible");
            setNextText("Next");
        }

        if (progress === 5) {
            if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state) {
                setError("Please fill in all required fields");
                return;
            }else{
                setError("");
            }

            setProgress(6);
            setFormHeader("Schedule Appointment");
            setText("Please select a date and time for our technician to visit your location");
            setNextText("Submit");
        }

        if (progress === 6){
            if (!formData.date || !formData.time || !formData.note) {
                setError("Please select a date and time for your appointment");
                return;
            }else{
                setError("");
            }

        }

        console.log(formData, serviceDetails);
    }

    return ( 
        <>
        <button type="button" onClick={btnClicked} className="py-2 px-4 rounded bg-primary cursor-pointer text-accent">Request Quote</button>
        <section onClick={removeSchedule} className={`bg-foreground/50 h-screen w-screen fixed top-0 left-0 flex items-center justify-center z-50 px-4 sm:px-0
            ${showSchedule ? "" : "hidden"}
            `}>
            <form onClick={(e) => {e.stopPropagation(); e.preventDefault()}} className="form-des relative h-max w-full sm:w-125 z-10 bg-background rounded px-10">
                <input type="text" name="serviceType" value={formData.serviceType} onChange={handleChanged} hidden />
                <input type="text" name="serviceRequest" value={formData.serviceRequest} onChange={handleChanged} hidden />
                <input type="text" name="serviceDetailsOptions" value={formData.serviceDetailsOptions} onChange={handleChanged} hidden />
                <div className="h-max w-full flex flex-col gap-3 items-center justify-center py-5 border-b border-grey mb-5">
                    <h2 className="text-2xl font-bold">{formHeader}</h2>
                    <p className="text-sm text-text">{text}</p>
                    <div className={`h-max w-full rounded bg-red-500 text-accent text-center
                        ${error ? "" : "hidden"}
                        `}>{error}</div>
                </div>
                <div className={`"h-max w-full flex-col gap-2
                    ${progress === 1 ? "flex" : "hidden"}
                    `}>
                    <button onClick={serviceTypeClicked} value="heating and cooling" type="button" className={`h-max w-full hover:bg-primary group flex items-center gap-3 py-3 rounded px-3 cursor-pointer transition-ease duration-500
                        ${formData.serviceType === "heating and cooling" ? "bg-primary" : ""}
                        `}>
                        <span className="h-4 w-4 border group-hover:border-2 rounded-full border-text group-hover:border-grey bg-transparent"></span>
                        <h3 className="text-text group-hover:text-grey">Heating & Cooling</h3>
                    </button>
                    <button onClick={serviceTypeClicked} value="general contracting" type="button" className={`h-max w-full hover:bg-primary group flex items-center gap-3 py-3 rounded px-3 cursor-pointer transition-ease duration-500
                        ${formData.serviceType === "general contracting" ? "bg-primary" : ""}
                        `}>
                        <span className="h-4 w-4 border group-hover:border-2 rounded-full border-text group-hover:border-grey bg-transparent"></span>
                        <h3 className="text-text group-hover:text-grey">General Contracting</h3>
                    </button>
                </div>
                <div className={`"h-max w-full flex-col gap-2
                    ${progress === 2 ? "flex" : "hidden"}
                    `}>
                    <button onClick={serviceRequestClicked} value="repair" type="button" className={`h-max w-full hover:bg-primary group flex items-center gap-3 py-3 rounded px-3 cursor-pointer transition-ease duration-500
                        ${formData.serviceRequest === "repair" ? "bg-primary" : ""}
                        `}>
                        <span className="h-4 w-4 border group-hover:border-2 rounded-full border-text group-hover:border-grey bg-transparent"></span>
                        <h3 className="text-text group-hover:text-grey">Repair</h3>
                    </button>
                    <button onClick={serviceRequestClicked} value="maintenance" type="button" className={`h-max w-full hover:bg-primary group flex items-center gap-3 py-3 rounded px-3 cursor-pointer transition-ease duration-500
                        ${formData.serviceRequest === "maintenance" ? "bg-primary" : ""}
                        `}>
                        <span className="h-4 w-4 border group-hover:border-2 rounded-full border-text group-hover:border-grey bg-transparent"></span>
                        <h3 className="text-text group-hover:text-grey">Maintenance</h3>
                    </button>
                    <button onClick={serviceRequestClicked} value="install or replace" type="button" className={`h-max w-full hover:bg-primary group flex items-center gap-3 py-3 rounded px-3 cursor-pointer transition-ease duration-500
                        ${formData.serviceRequest === "install or replace" ? "bg-primary" : ""}
                        `}>
                        <span className="h-4 w-4 border group-hover:border-2 rounded-full border-text group-hover:border-grey bg-transparent"></span>
                        <h3 className="text-text group-hover:text-grey">Install or Replace</h3>
                    </button>
                </div>
                <div className={`"h-max w-full flex-col gap-2
                    ${progress === 3 ? "flex" : "hidden"}
                    `}>
                    <button onClick={serviceOptionClicked} value="online quote" type="button" className={`h-max w-full hover:bg-primary group flex items-center gap-3 py-3 rounded px-3 cursor-pointer transition-ease duration-500
                        ${formData.serviceDetailsOptions === "online quote" ? "bg-primary" : ""}
                        `}>
                        <span className="h-4 w-4 border group-hover:border-2 rounded-full border-text group-hover:border-grey bg-transparent"></span>
                        <h3 className="text-text group-hover:text-grey">Online Quote</h3>
                    </button>
                    <button onClick={serviceOptionClicked} value="inhome quote" type="button" className={`h-max w-full hover:bg-primary group flex items-center gap-3 py-3 rounded px-3 cursor-pointer transition-ease duration-500
                        ${formData.serviceDetailsOptions === "inhome quote" ? "bg-primary" : ""}
                        `}>
                        <span className="h-4 w-4 border group-hover:border-2 rounded-full border-text group-hover:border-grey bg-transparent"></span>
                        <h3 className="text-text group-hover:text-grey">In-Home Quote</h3>
                    </button>
                </div>
                <div className={`"h-max w-full flex-col gap-2
                    ${progress === 4 ? "flex" : "hidden"}
                    `}>
                    <div className="h-max w-full">
                        <div className="h-max w-full">
                            <p className="text-text text-base mb-3">How old is your system?</p>
                        </div>
                        <div className="h-max w-full flex items-center gap-3 flex-wrap border rounded border-grey p-2">
                            <button onClick={systemAgeClick} value="0 - 10 years" className={`group hover:bg-primary hover:border-primary h-max w-max flex items-start flex-col gap-3 border rounded border-grey p-2 cursor-pointer
                                ${serviceDetails.systemAge === "0 - 10 years" ? "bg-primary" : ""}
                                `} type="button" title="details">
                                <i className="fa fa-plus text-grey"></i>
                                <span className="ml-2">0 - 10 years</span>
                            </button>
                            <button onClick={systemAgeClick} value="more than 10 years" className={`group hover:bg-primary hover:border-primary h-max w-max flex items-start flex-col gap-3 border rounded border-grey p-2 cursor-pointer
                                ${serviceDetails.systemAge === "more than 10 years" ? "bg-primary" : ""}
                                `} type="button" title="details">
                                <i className="fa fa-plus text-grey"></i>
                                <span className="ml-2"> more than 10 years</span>
                            </button>
                            <button onClick={systemAgeClick} value="not sure" className={`group hover:bg-primary hover:border-primary h-max w-max flex items-start flex-col gap-3 border rounded border-grey p-2 cursor-pointer
                                ${serviceDetails.systemAge === "not sure" ? "bg-primary" : ""}
                                `} type="button" title="details">
                                <i className="fa fa-plus text-grey"></i>
                                <span className="ml-2">Not sure</span>
                            </button>
                        </div>
                    </div>
                    <div className="h-max w-full">
                        <div className="h-max w-full">
                            <p className="text-text text-base mb-3">Is your system working?</p>
                        </div>
                        <div className="h-max w-full flex items-center gap-3 flex-wrap border rounded border-grey p-2">
                            <button onClick={systemWorkingClick} value="yes" className={`group hover:bg-primary hover:border-primary h-max w-max flex items-start flex-col gap-3 border rounded border-grey p-2 cursor-pointer
                                ${serviceDetails.systemWorking === "yes" ? "bg-primary" : ""}
                                `} type="button" title="details">
                                <i className="fa fa-plus text-grey"></i>
                                <span className="ml-2">Yes</span>
                            </button>
                            <button onClick={systemWorkingClick} value="no" className={`group hover:bg-primary hover:border-primary h-max w-max flex items-start flex-col gap-3 border rounded border-grey p-2 cursor-pointer
                                ${serviceDetails.systemWorking === "no" ? "bg-primary" : ""}
                                `} type="button" title="details">
                                <i className="fa fa-plus text-grey"></i>
                                <span className="ml-2"> No</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`"h-max w-full flex-col gap-2
                    ${progress === 5 ? "flex" : "hidden"}
                    `}>
                    <div className="h-max w-full grid grid-cols-2 gap-2">
                        <div className="h-max w-full flex flex-col gap-1">
                            <label htmlFor="firstname" className="text-grey">First Name:</label>
                            <input type="text" name="firstname" onChange={handleChanged} title="firstname" placeholder="First Name" className="w-full h-10 px-2 border border-grey outline-none rounded" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-1">
                            <label htmlFor="lastname" className="text-grey">Last Name:</label>
                            <input type="text" name="lastname" onChange={handleChanged} title="lastname" placeholder="Last Name" className="w-full h-10 px-2 border border-grey outline-none rounded" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-1">
                            <label htmlFor="email" className="text-grey">Email:</label>
                            <input type="email" name="email" onChange={handleChanged} title="email" placeholder="Email" className="w-full h-10 px-2 border border-grey outline-none rounded" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-1">
                            <label htmlFor="phone" className="text-grey">Phone:</label>
                            <input type="tel" name="phone" onChange={handleChanged} title="phone" placeholder="Phone" className="w-full h-10 px-2 border border-grey outline-none rounded" />
                        </div>
                    </div>
                    <div className="h-max w-full">
                        <label htmlFor="address" className="text-grey">Address:</label>
                        <input type="text" name="address" onChange={handleChanged} title="address" placeholder="Address" className="w-full h-10 px-2 border border-grey outline-none rounded" />
                        <div className="h-max w-full grid grid-cols-2 gap-2 mt-2">
                            <input type="text" name="city" onChange={handleChanged} title="city" className="w-full h-10 px-2 border border-grey outline-none rounded" placeholder="City" />
                            <input type="text" name="state" onChange={handleChanged} title="state" className="w-full h-10 px-2 border border-grey outline-none rounded" placeholder="State" />
                        </div>
                    </div>
                </div>
                <div className={`"h-max w-full flex-col gap-2
                    ${progress === 6 ? "flex" : "hidden"}
                    `}>
                    <div className="h-max w-full grid grid-cols-2 gap-2">
                        <div className="h-max w-full flex flex-col gap-1">
                            <label htmlFor="date" className="text-grey">Preferred Date:</label>
                            <input type="date" name="date" title="date" value={formData.date} onChange={handleChanged} className="w-full h-10 px-2 border border-grey outline-none rounded" />
                        </div>
                        <div className="h-max w-full flex flex-col gap-1">
                            <label htmlFor="time" className="text-grey">Preferred Time:</label>
                            <input type="time" name="time" value={formData.time} title="time" onChange={handleChanged} className="w-full h-10 px-2 border border-grey outline-none rounded" />
                        </div>
                    </div>
                    <div className="h-max w-full mt-3">
                        <label htmlFor="note" className="text-text">General Note</label>
                        <textarea name="note" title="note" value={formData.note} onChange={handleChanged} className="min-w-full max-w-full min-h-20 max-h-20 px-2 border border-grey outline-none rounded" placeholder="Please provide any additional information or special instructions"></textarea>
                    </div>
                </div>
                <div className="py-5 h-max w-full border-t border-grey mt-5 flex justify-end gap-3 items-center">
                    <button onClick={prevClicked} className={`rounded cursor-pointer px-5 py-2 bg-primary text-accent outline-none
                        ${progress === 1 ? "hidden" : ""}
                        `} type="button">Previous</button>
                    <button onClick={nxtClicked} className="rounded cursor-pointer px-5 py-2 bg-primary text-accent outline-none" type="submit">{nextText}</button>
                </div>
            </form>
        </section>
        </>
     );
}
 
export default ScheduleBtn;