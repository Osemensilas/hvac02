import HomeHero from "@/components/sections/HomeHero";
import Gallery from "@/components/sections/Gallery";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import WhySection from "@/components/sections/WhySection";
import ContactUs from "@/components/sections/ContactUs";
import ScheduleBtn from "@/components/ui/ScheduleBtn";

const Page = () => {
  return ( 
    <>
    <HomeHero />
    <Services />
    <Gallery />
    <WhySection />
    <Reviews />
    <ContactUs />
    <section className="h-max w-screen bg-header py-16 px-6 flex flex-col items-center gap-6">
      <h3 className="text-2xl text-accent font-bold">Schedule an appointment with us for your HVAC needs today</h3>
      <ScheduleBtn />
    </section>
    </>
   );
}
 
export default Page;