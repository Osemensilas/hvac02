import Image from 'next/image';

const Services = () => {
  return(
    <>
      <section className="h-max w-screen px-10 py-20">
        <h2 className="text-text text-3xl font-bold text-center">Our Services</h2>
        <div className="h-max w-full mt-20 flex flex-wrap items-center justify-center gap-5">
          <div className="h-max w-[250px] bg-background rounded shadow p-2">
            <div className="h-max w-full mb-5 items-center justify-center">
              <div className="relative h-20 w-20">
                <Image src="/" fill className="object-cover" alt="why image" />
              </div>
            </div>
            <p className="text-text text-base text-center">AC Repair</p>
          </div>
          <div className="h-max w-[250px] bg-background rounded shadow p-2">
            <div className="h-max w-full mb-5 items-center justify-center">
              <div className="relative h-20 w-20">
                <Image src="/" fill className="object-cover" alt="why image" />
              </div>
            </div>
            <p className="text-text text-base text-center">AC Installation</p>
          </div>
          <div className="h-max w-[250px] bg-background rounded shadow p-2">
            <div className="h-max w-full mb-5 items-center justify-center">
              <div className="relative h-20 w-20">
                <Image src="/" fill className="object-cover" alt="why image" />
              </div>
            </div>
            <p className="text-text text-base text-center">AC Servicing & Maintenance</p>
          </div>
          <div className="h-max w-[250px] bg-background rounded shadow p-2">
            <div className="h-max w-full mb-5 flex items-center justify-center">
              <div className="relative h-20 w-20">
                <Image src="/" fill className="object-cover" alt="why image" />
              </div>
            </div>
            <p className="text-text text-base text-center">General Contracting</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;