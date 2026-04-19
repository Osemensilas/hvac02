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
    <head>
      <title>JoshLegend AC Services - Your Trusted HVAC Experts in Lagos Island</title>
      <meta name="description" content="JoshLegend AC Services is your go-to HVAC company in Lagos Island, offering fast, reliable, and affordable air conditioning repair, installation, and maintenance services. Contact us today for expert solutions to keep you cool and comfortable." />
      <meta name="keywords" content="AC repair Lagos Island, AC installation Lagos Island, AC maintenance Lagos Island, HVAC services Lagos Island, air conditioning repair Lagos Island, air conditioning installation Lagos Island, air conditioning maintenance Lagos Island" />
    </head>
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