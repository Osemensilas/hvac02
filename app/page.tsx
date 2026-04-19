import HomeHero from "@/components/sections/HomeHero";
import Gallery from "@/components/sections/Gallery";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import WhySection from "@/components/sections/WhySection";
import ContactUs from "@/components/sections/ContactUs";

const Page = () => {
  return ( 
    <>
    <HomeHero />
    <Services />
    <Gallery />
    <WhySection />
    <Reviews />
    <ContactUs />
    </>
   );
}
 
export default Page;