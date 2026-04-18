import Image from 'next/image';
import ContactBtn from '@/components/ui/ContactBtn';

const HomeHero = () => {
  return (
    <>
      <section className="relative h-max w-screen py-40 px-4 sm:px-10 flex items-center justify-start">
        <div className="absolute h-full w-full">
          <Image src="/" fill className="object-cover" alt="hero image" />
        </div>
        <div className="h-max w-full sm:w-3/5 relative z-10">
          <h1 className="text-header text-3xl mb-10">Fast & Reliable AC Repair & Installation</h1>
          <p className="">We provide professional air conditioning services for homes and businesses. Quick response and affordable pricing.</p>
          <div className="h-max w-full mt-5">
            <ContactBtn />
          </div>
        </div>
      </section>
      <section className="h-max w-screen py-10 px-10 bg-foreground">
        <div className="w-full h-max flex items-center justify-between gap-10">
            <div className="h-max w-max flex flex-col items-center justify-center gap-3">
                <div className="relative h-20 w-20">
                    <Image src={"/images/hero2.jpg"} alt="Services Header" fill className="object-cover object-center rounded" />
                </div>
                <h4 className="text-background text-xl font-bold">Five-star Rated</h4>
            </div>
            <div className="h-max w-max flex flex-col items-center justify-center gap-3">
                <div className="relative h-20 w-20">
                    <Image src={"/images/hero2.jpg"} alt="Services Header" fill className="object-cover object-center rounded" />
                </div>
                <h4 className="text-background text-xl font-bold">Licensed & Insured</h4>
            </div>
            <div className="h-max w-max flex flex-col items-center justify-center gap-3">
                <div className="relative h-20 w-20">
                    <Image src={"/images/hero2.jpg"} alt="Services Header" fill className="object-cover object-center rounded" />
                </div>
                <h4 className="text-background text-xl font-bold">24/7 Emergency Support</h4>
            </div>
            <div className="h-max w-max flex flex-col items-center justify-center gap-3">
                <div className="relative h-20 w-20">
                    <Image src={"/images/hero2.jpg"} alt="Services Header" fill className="object-cover object-center rounded" />
                </div>
                <h4 className="text-background text-xl font-bold">10+ Years Experience</h4>
            </div>
        </div>
    </section>
    </>
  );
}

export default HomeHero;