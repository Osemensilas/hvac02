const WorkProcess = () => {
    return ( 
        <>
        <section className="h-max sm:h-100 w-full px-4 sm:px-10 py-10">
            <div className="h-full w-full flex flex-col justify-between items-center bg-background rounded p-10 gap-5">
                <h3 className="text-xl font-bold text-primary">WORK PROCESS</h3>
                <h2 className="text-2xl font-bold text-header">Your Comfort, Our Priority</h2>
                <div className="h-max w-full flex flex-wrap items-center justify-center sm:justify-between gap-5">
                    <div className="h-max w-max flex flex-col justify-center items-center gap-3 bg-backgroundLight rounded p-4">
                        <i className="fa-solid fa-comments text-3xl"></i>
                        <h2 className="text-lg font-semibold">Free Consultation</h2>
                    </div>
                    <div className="h-max w-max flex flex-col justify-center items-center gap-3 bg-backgroundLight rounded p-4">
                        <i className="fa-solid fa-search text-3xl"></i>
                        <h2 className="text-lg font-semibold">Assessment Inspection</h2>
                    </div>
                    <div className="h-max w-max flex flex-col justify-center items-center gap-3 bg-backgroundLight rounded p-4">
                        <i className="fa-solid fa-headset text-3xl"></i>
                        <h2 className="text-lg font-semibold">Support & Maintenance</h2>
                    </div>
                    <div className="h-max w-max flex flex-col justify-center items-center gap-3 bg-backgroundLight rounded p-4">
                        <i className="fa-solid fa-wrench text-3xl"></i>
                        <h2 className="text-lg font-semibold">Installation or Repair</h2>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default WorkProcess;