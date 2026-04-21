import Image from 'next/image';
import ScheduleBtn from '../ui/ScheduleBtn';
import ContactBtn from '../ui/ContactBtn';

const HomeHero = () => {
  return (
    <>
      <section className="h-[110vh] w-screen px-4 sm:px-10 py-10 flex flex-col sm:flex-row items-start gap-3">
        <div className="h-full w-full sm:w-[45%] flex flex-col gap-3 items-start">
          <div className="h-[45%] w-full flex flex-col justify-between items-start">
            <p className="text-base text-header font-bold">Perfect temperature always</p>
            <h1 className="text-3xl font-bold text-text">Fast and Reliable AC repair, installation, maintenance and HVAC services in Nigeria</h1>
            <p className="text-text">We provide professional air conditioning services for homes and businesses. Quick response and affordable pricing.</p>
            <div className="w-full h-max flex items-center gap-4">
              <ScheduleBtn />
              <ContactBtn />
            </div>
          </div>
          <div className="h-[10%] w-max flex items-center gap-3 py-5">
            <div className="h-max w-max border-r border-grey pr-3">
              <h3 className="text-2xl font-bold text-header">4.4k +</h3>
              <p className="text-text text-sm">Projects completed</p>
            </div>
            <div className="h-max w-max border-r border-grey pr-3">
              <h3 className="text-2xl font-bold text-header">1.9k +</h3>
              <p className="text-text text-sm">Plants Type</p>
            </div>
            <div className="h-max w-max">
              <h3 className="text-2xl font-bold text-header">2.9k +</h3>
              <p className="text-text text-sm">Happy Clients</p>
            </div>
          </div>
          <div className="h-[45%] w-full">
            <div className="relative h-full w-full rounded-3xl">
              <Image src="/hero2.jpg" alt="Hero Image" fill className="object-cover rounded-3xl" />
            </div>
          </div>
        </div>
        <div className="h-max w-full sm:w-[55%] flex flex-col gap-3 items-start">
          <div className="relative h-[calc(100vh-100px)] w-full rounded-3xl">
            <Image src="/hero1.jpg" alt="Hero Image" fill className="object-cover rounded-3xl" />
          </div>
          <div className="w-full h-max flex items-center justify-between gap-3 p-3 bg-background rounded">
            <div className="h-max w-wax flex">
              <div className="h-max w-6">
                <div className="relative h-10 w-10">
                  <Image src="/google1.jpg" alt="google image" fill className="object-cover rounded-full" />
                </div>
              </div>
              <div className="h-max w-6">
                <div className="relative h-10 w-10">
                  <Image src="/google2.jpg" alt="google image" fill className="object-cover rounded-full" />
                </div>
              </div>
              <div className="h-max w-6">
                <div className="relative h-10 w-10">
                  <Image src="/google3.jpg" alt="google image" fill className="object-cover rounded-full" />
                </div>
              </div>
              <div className="h-max w-6">
                <div className="relative h-10 w-10">
                  <Image src="/google4.jpg" alt="google image" fill className="object-cover rounded-full" />
                </div>
              </div>
              <div className="h-max w-6">
                <div className="relative h-10 w-10">
                  <Image src="/google5.jpg" alt="google image" fill className="object-cover rounded-full" />
                </div>
              </div>
            </div>
            <div className="relative h-10 w-10">
              <Image src="/google.png" alt="google image" fill className="object-cover rounded-3xl" />
            </div>
            <div className="h-max w-max">
              <p className="text-sm text-text">Review best over 15k reviews</p>
              <div className="h-max w-max text-yellow-500 flex items-center gap-1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="h-max w-max">
              <h3 className="text-2xl font-semibold text-header">Reviews</h3>
              <p className="text-sm text-text">Review best over 15k reviews</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeHero;