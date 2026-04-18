import Image from 'next/image';

const WhySection = () => {
  return(
    <>
      <section className="h-max w-full px-10 py-20">
        <h2 className="text-text text-3xl font-bold text-center">Why Choose Us</h2>
        <div className="h-max w-full mt-20 flex space-evenly">
          <div className="h-max w-[200px] bg-background rounded shadow">
            <div className="h-max w-full mb-5">
              <div className="relative h-20 w-20">
                <Image src="/" fill className="object-cover" alt="why image" />
              </div>
            </div>
            <p className="text-text text-base text-center">Fast response time</p>
          </div>
          <div className="h-max w-[200px] bg-background rounded shadow">
            <div className="h-max w-full mb-5">
              <div className="relative h-20 w-20">
                <Image src="/" fill className="object-cover" alt="why image" />
              </div>
            </div>
            <p className="text-text text-base text-center">Affordable pricing</p>
          </div>
          <div className="h-max w-[200px] bg-background rounded shadow">
            <div className="h-max w-full mb-5">
              <div className="relative h-20 w-20">
                <Image src="/" fill className="object-cover" alt="why image" />
              </div>
            </div>
            <p className="text-text text-base text-center">Experienced technician</p>
          </div>
          <div className="h-max w-[200px] bg-background rounded shadow">
            <div className="h-max w-full mb-5">
              <div className="relative h-20 w-20">
                <Image src="/" fill className="object-cover" alt="why image" />
              </div>
            </div>
            <p className="text-text text-base text-center">Reliable service</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhySection;