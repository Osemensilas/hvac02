import ContactBtn from '@/components/ui/ContactBtn';
import Image from 'next/image';

export const metadata = {
  title: "About Us | Josh Legend HVAC",
  description: "Learn about Josh Legend – Nigeria's trusted HVAC professionals serving Lagos Island with fast, reliable, and affordable AC services.",
};

const values = [
  {
    icon: <i className="fa-solid fa-face-smile"></i>,
    title: "Customer Centric Approach",
    desc: "We prioritize our customers' needs and satisfaction in everything we do.",
  },
  {
    icon: <i className="fa-solid fa-clipboard-check"></i>,
    title: "Quality Assurance",
    desc: "We maintain the highest standards of quality in all our work.",
  },
  {
    icon: <i className="fa-solid fa-leaf"></i>,
    title: "Sustainable Solutions",
    desc: "We are committed to providing environmentally friendly solutions for our customers.",
  },
];

const stats = [
  { value: "4.4k+", label: "Projects Completed" },
  { value: "1.9k+", label: "Plant Types Handled" },
  { value: "2.9k+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
];

const team = [
  { name: "Joshua Adeyemi", role: "Lead HVAC Engineer", initials: "JA" },
  { name: "Chidi Okonkwo", role: "Senior AC Technician", initials: "CO" },
  { name: "Amaka Eze", role: "General Contracting Lead", initials: "AE" },
  { name: "Bola Fashola", role: "Customer Relations Manager", initials: "BF" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="h-max w-screen py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">About Us</p>
            <h1 className="text-3xl font-bold text-text leading-tight mb-6">
              Creating Comfortable Spaces,{" "}
              <span className="text-primary">One Home at a Time</span>
            </h1>
            <p className="text-text text-base mb-6 leading-relaxed">
              We are a team of experienced HVAC professionals dedicated to providing top-quality services to our customers. With years of experience and a commitment to excellence, we ensure that every project is completed to the highest standards.
            </p>
            <div className="h-max w-max">
                <ContactBtn />
            </div>
          </div>

          {/* Image placeholder with HVAC worker illustration */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image src="/service3.jpg" alt="about image" fill className="object-cover rounded-xl" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-5 shadow-xl">
              <p className="text-3xl font-black">10+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-background rounded-xl">
              <p className="text-3xl font-black text-primary mb-2">{stat.value}</p>
              <p className="text-text font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Values</p>
            <h2 className="text-xl md:text-3xl font-black text-text">What Drives Us Every Day</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-primary text-white rounded-2xl p-8 hover:bg-red-700 transition-colors duration-300"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-accent/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-accent py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
            <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-4">
              Trusted AC Experts Serving Lagos Island
            </h2>
            <p className="text-text max-w-xl mx-auto">
              With fast, reliable, and affordable solutions — we're the top choice for HVAC services in Lagos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <i className="fa-solid fa-bolt"></i>, title: "Fast Response", desc: "Quick service across Lagos Island." },
              { icon: <i className="fa fa-wrench"></i>, title: "Experienced Technicians", desc: "Skilled AC professionals." },
              { icon: <i className="fa-solid fa-tags"></i>, title: "Affordable Pricing", desc: "No hidden costs." },
              { icon: <i className="fa fa-map-marker"></i>, title: "Lagos Island Based", desc: "We're close to you." },
              { icon: <i className="fa fa-cogs"></i>, title: "All-in-One Services", desc: "Repair, install & more." },
              { icon: <i className="fa fa-star"></i>, title: "Customer Satisfaction", desc: "We deliver results." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 bg-background rounded-2xl hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Team</p>
            <h2 className="text-xl md:text-3xl font-black text-text">Meet the Experts</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold text-text">{member.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}