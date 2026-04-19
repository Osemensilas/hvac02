const Services = () => {
  return(
    <>
      <section className="h-max w-screen px-10 py-20">
        <h2 className="text-text text-3xl font-bold text-center">Our Services</h2>
        <div className="h-max w-full mt-20 flex flex-wrap items-center justify-center gap-5">
          <div className="h-max w-62.5 bg-accent rounded shadow px-5 py-10">
            <div className="h-max w-full mb-5 flex items-center justify-center">
                <i className="fas fa-tools text-4xl text-primary"></i> 
            </div>
            <p className="text-text text-base text-center">AC Repair</p>
          </div>
          <div className="h-max w-62.5 bg-accent rounded shadow px-5 py-10">
            <div className="h-max w-full mb-5 flex items-center justify-center">
              <i className="fas fa-fan text-4xl text-primary"></i> 
            </div>
            <p className="text-text text-base text-center">AC Installation</p>
          </div>
          <div className="h-max w-62.5 bg-accent rounded shadow px-5 py-10">
            <div className="h-max w-full mb-5 flex items-center justify-center">
              <i className="fas fa-sync-alt text-4xl text-primary"></i>
            </div>
            <p className="text-text text-base text-center">AC Servicing & Maintenance</p>
          </div>
          <div className="h-max w-62.5 bg-accent rounded shadow px-5 py-10">
            <div className="h-max w-full mb-5 flex items-center justify-center">
              <i className="fas fa-hard-hat text-4xl text-primary"></i>
            </div>
            <p className="text-text text-base text-center">General Contracting</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;