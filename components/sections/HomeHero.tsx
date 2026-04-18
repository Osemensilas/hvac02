import Image from 'next/image';
import ContactBtn from 'ContactBtn';

const HomeHero = () => {
  return (
    <>
      <section className="relative h-[calc(100vh-50px)] w-screen flex items-center justify-start">
        <div className="absolute h-full w-full">
          <Image src="/" fill className="object-cover" alt="hero image" />
        </div>
        <div className="h-max w-2/5">
          <h1 className="text-header text-3xl mb-10">Fast & Reliable AC Repair & Installation</h1>
          <p className="">We provide professional air conditioning services for homes and businesses. Quick response and affordable pricing.</p>
          <div className="h-max w-full mt-5">
            <ContactBtn />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeHero;