import ContactBtn from "../ui/ContactBtn";
import Image from "next/image";

const Services = () => {
  return(
    <>
      <section className="h-170 w-full px-4 sm:px-10 flex gap-5 py-10">
        <div className="h-full w-[40%] flex flex-col justify-between items-start gap-3 bg-background rounded p-10">
          <h3 className="text-xl font-bold text-primary">OUR SERVICES</h3>
          <h2 className="text-2xl font-bold text-header">Expert Heating & Cooling Services you can rely on</h2>
          <p className="text-text">No matter the size of your project, we have the expertise and equipment to deliver exceptional results.</p>
          <div className="h-max w-max">
            <ContactBtn />
          </div>
          <div className="relative w-full h-70">
            <Image src="/services.jpg" alt="services image" fill className="object-cover rounded-3xl" />
          </div>
        </div>
        <div className="h-full w-[60%] flex flex-col gap-5">
          <div className="h-full w-full bg-background rounded p-4 flex items-center gap-3">
            <div className="relative h-20 w-20 rounded-xl">
              <Image src="/service1.jpg" alt="services image" fill className="object-cover rounded-3xl" />
            </div>
            <div className="h-full w-4/5 flex flex-col gap-2">
              <h4 className="font-bold text-xl">AC Repairs</h4>
              <p className="text-text">Our expert technicians provide fast and reliable AC repair services to get you back to comfort quickly.</p>
            </div>
            <div className="h-max w-max flex items-center justify-end">
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>
          <div className="h-full w-full bg-background rounded p-4 flex items-center gap-3">
            <div className="relative h-20 w-20 rounded-xl">
              <Image src="/service2.jpg" alt="services image" fill className="object-cover rounded-3xl" />
            </div>
            <div className="h-full w-4/5 flex flex-col gap-2">
              <h4 className="font-bold text-xl">AC Maintenance</h4>
              <p className="text-text">We offer comprehensive AC maintenance services to keep your system running efficiently and extend its lifespan.</p>
            </div>
            <div className="h-max w-max flex items-center justify-end">
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>
          <div className="h-full w-full bg-background rounded p-4 flex items-center gap-3">
            <div className="relative h-20 w-20 rounded-xl">
              <Image src="/service3.jpg" alt="services image" fill className="object-cover rounded-3xl" />
            </div>
            <div className="h-full w-4/5 flex flex-col gap-2">
              <h4 className="font-bold text-xl">AC Installation</h4>
              <p className="text-text">Our professionals provide efficient and reliable AC installation services to meet your cooling needs.</p>
            </div>
            <div className="h-max w-max flex items-center justify-end">
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>
          <div className="h-full w-full bg-background rounded p-4 flex items-center gap-3">
            <div className="relative h-20 w-20 rounded-xl">
              <Image src="/service4.jpg" alt="services image" fill className="object-cover rounded-3xl" />
            </div>
            <div className="h-full w-4/5 flex flex-col gap-2">
              <h4 className="font-bold text-xl">General Contracting</h4>
              <p className="text-text">We offer comprehensive general contracting services for all your HVAC needs.</p>
            </div>
            <div className="h-max w-max flex items-center justify-end">
              <i className="fa-solid fa-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;