export const metadata = {
  title: "Services | Josh Legend HVAC",
  description: "Expert AC repair, maintenance, installation, and general contracting services in Lagos, Nigeria.",
};

const services = [
  {
    icon: "🛠️",
    title: "AC Repairs",
    desc: "Our expert technicians provide fast and reliable AC repair services to get you back to comfort quickly. We diagnose and fix all types of AC faults same day.",
    features: ["Same-day repairs", "All AC brands", "Warranty on work", "Emergency callouts"],
  },
  {
    icon: "🔍",
    title: "AC Maintenance",
    desc: "We offer comprehensive AC maintenance services to keep your system running efficiently and extend its lifespan. Regular servicing prevents costly breakdowns.",
    features: ["Filter cleaning", "Refrigerant check", "Performance testing", "Scheduled servicing"],
  },
  {
    icon: "📦",
    title: "AC Installation",
    desc: "Our professionals provide efficient and reliable AC installation services to meet your cooling needs — for homes, offices, and commercial spaces.",
    features: ["All major brands", "Residential & commercial", "Clean installation", "Post-install testing"],
  },
  {
    icon: "🏗️",
    title: "General Contracting",
    desc: "We offer comprehensive general contracting services for all your HVAC needs — from ductwork to full system overhauls and commercial installations.",
    features: ["Ductwork design", "Full system overhauls", "Commercial projects", "Project management"],
  },
];

const process = [
  { step: "01", icon: "💬", title: "Free Consultation", desc: "Reach out and tell us about your HVAC needs. We'll assess the situation at no cost." },
  { step: "02", icon: "🔎", title: "Assessment Inspection", desc: "Our technicians visit your site and carry out a thorough inspection of your system." },
  { step: "03", icon: "🎧", title: "Support & Maintenance", desc: "We provide ongoing support and maintenance to keep your systems running perfectly." },
  { step: "04", icon: "🔧", title: "Installation or Repair", desc: "We carry out the required installation or repair with precision and professionalism." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fffdf0] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Expert Heating & Cooling Services{" "}
            <span className="text-red-600">You Can Rely On</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            No matter the size of your project, we have the expertise and equipment to deliver exceptional results — fast and affordably.
          </p>
          <a
            href="tel:+2347047880486"
            className="inline-flex items-center gap-2 border-2 border-red-600 text-red-600 font-semibold px-6 py-3 rounded hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Call Us ↗
          </a>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#fffdf0] rounded-2xl p-8 border border-yellow-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5">{service.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-red-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Get a Quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Process */}
      <section className="bg-[#fffdf0] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Work Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Your Comfort, Our Priority</h2>
            <p className="text-gray-500 max-w-lg mx-auto">From first call to final fix — here's how we work.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.step} className="relative text-center">
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-red-100 z-0" />
                )}
                <div className="relative z-10 w-20 h-20 bg-white border-2 border-red-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
                  {step.icon}
                </div>
                <div className="text-red-600 font-black text-xs mb-2 tracking-widest">{step.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-red-600 py-20 px-6 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Get Started?</h2>
        <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
          Contact us today for a free consultation. Affordable pricing, no hidden costs — ever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+2347047880486"
            className="bg-white text-red-600 font-bold px-8 py-3 rounded hover:bg-red-50 transition-colors"
          >
            Call Us Now
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Request Quote
          </a>
        </div>
      </section>
    </>
  );
}