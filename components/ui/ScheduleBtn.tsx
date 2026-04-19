'use client';

import { useState } from "react";

const ScheduleBtn = () => {

    const [showSchedule, setShowSchedule] = useState(false);
    const [error, setError] = useState<string>("");
    const [progress, setProgress] = useState(1);
    const [formHeader, setFormHeader] = useState<string>("Service Type");
    const [text, setText] = useState<string>("Please select a service type");
    const [formData, setFormData] = useState({
        serviceType: "",
        serviceRequest: "",
        serviceDetailsOptions: "",
    });
    const [serviceDetails, setServiceDetails] = useState({
        systemAge: "",
        systemWorking: "",
        systemType: "",
        ownHome: "",
        extraDetails: "",
    });

    const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }

    const btnClicked = () => {
        setShowSchedule(true);
    }

    const removeSchedule = () => {
        setShowSchedule(false);
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

    const prevClicked = () => {
        if (progress === 2) {
            setProgress(1);
            setFormHeader("Service Type");
            setText("Please select a service type");
        }

        if (progress === 3) {
            setProgress(2);
            setFormHeader("Service Request");
            setText("What kind of service do you need?");
        }

        if (progress === 4) {
            setProgress(3);
            setFormHeader("Service Details Options");
            setText("Please select the service details that best fit your needs");
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
        }

        if (progress === 3) {
            if (!formData.serviceDetailsOptions) {
                setError("Please select a service details option to proceed");
                return;
            }else{
                setError("");
            }
            setProgress(4);
            setFormHeader("Service Details");
            setText("Help us with these details to provide you with the best service");
        }

        console.log(formData);
    }

    return ( 
        <>
        <button type="button" onClick={btnClicked} className="py-2 px-4 rounded bg-primary cursor-pointer text-accent">Request Quote</button>
        <section onClick={removeSchedule} className={`bg-foreground/50 h-screen w-screen fixed top-0 left-0 flex items-center justify-center z-50
            ${showSchedule ? "" : "hidden"}
            `}>
            <form onClick={(e) => {e.stopPropagation(); e.preventDefault()}} className="form-des relative h-max w-125 z-10 bg-background rounded px-10">
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
                    <button onClick={serviceTypeClicked} value="plumbing" type="button" className={`h-max w-full hover:bg-primary group flex items-center gap-3 py-3 rounded px-3 cursor-pointer transition-ease duration-500
                        ${formData.serviceType === "plumbing" ? "bg-primary" : ""}
                        `}>
                        <span className="h-4 w-4 border group-hover:border-2 rounded-full border-text group-hover:border-grey bg-transparent"></span>
                        <h3 className="text-text group-hover:text-grey">Plumbing</h3>
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
                            <button className="group hover:bg-primary hover:border-primary h-max w-max flex items-start flex-col gap-3 border rounded border-grey p-2 cursor-pointer" type="button" title="details">
                                <i className="fa fa-plus text-grey"></i>
                                <span className="ml-2">0 - 10 years</span>
                            </button>
                            <button className="group hover:bg-primary hover:border-primary h-max w-max flex items-start flex-col gap-3 border rounded border-grey p-2 cursor-pointer" type="button" title="details">
                                <i className="fa fa-plus text-grey"></i>
                                <span className="ml-2"> more than 10 years</span>
                            </button>
                            <button className="group hover:bg-primary hover:border-primary h-max w-max flex items-start flex-col gap-3 border rounded border-grey p-2 cursor-pointer" type="button" title="details">
                                <i className="fa fa-plus text-grey"></i>
                                <span className="ml-2">Not sure</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-5 h-max w-full border-t border-grey mt-5 flex justify-end gap-3 items-center">
                    <button onClick={prevClicked} className={`rounded cursor-pointer px-5 py-2 bg-primary text-accent
                        ${progress === 1 ? "hidden" : ""}
                        `} type="button">Previous</button>
                    <button onClick={nxtClicked} className="rounded cursor-pointer px-5 py-2 bg-primary text-accent" type="submit">Next</button>
                </div>
            </form>
        </section>
        </>
     );
}
 
export default ScheduleBtn;