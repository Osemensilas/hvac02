import Image from 'next/image';
import ContactBtn from '@/components/ui/ContactBtn';

const HomeHero = () => {
  return (
    <>
      <section className="relative h-max sm:h-screen w-screen py-40 sm:py-0 px-4 sm:px-10 flex items-center justify-start">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image src="/hero1.jpg" fill className="object-cover" alt="hero image" />
        </div>
        <div className="h-max w-full sm:w-3/5 relative z-10">
          <h1 className="text-header text-3xl mb-10 font-bold">Fast & Reliable AC Repair & Installation</h1>
          <p className="text-text font-bold">We provide professional air conditioning services for homes and businesses. Quick response and affordable pricing.</p>
          <div className="h-max w-full mt-5 relative z-100">
            <ContactBtn />
          </div>
        </div>
      </section>
      <section className="h-max w-screen py-10 px-10 bg-header">
        <div className="w-full h-max flex items-center justify-between flex-wrap gap-10">
            <div className="h-max w-max flex flex-col items-center justify-center gap-3">
                <i className="fas fa-star text-4xl text-accent"></i>
                <h4 className="text-background text-sm sm:text-xl font-bold">Five-star Rated</h4>
            </div>
            <div className="h-max w-max flex flex-col items-center justify-center gap-3">
                <i className="fas fa-shield-alt text-4xl text-accent"></i>
                <h4 className="text-background text-sm sm:text-xl font-bold">Licensed & Insured</h4>
            </div>
            <div className="h-max w-max flex flex-col items-center justify-center gap-3">
                <i className="fas fa-exclamation-triangle text-4xl text-accent"></i>
                <h4 className="text-background text-sm sm:text-xl font-bold">24/7 Emergency Support</h4>
            </div>
            <div className="h-max w-max flex flex-col items-center justify-center gap-3">
                <i className="fas fa-award text-4xl text-accent"></i>
                <h4 className="text-background text-sm sm:text-xl font-bold">10+ Years Experience</h4>
            </div>
        </div>
    </section>
    </>
  );
}

export default HomeHero;