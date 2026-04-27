"use client";

import { useState } from "react";

const faqs = [
  { q: "Do you offer AC repair services?", a: "Yes! We offer fast and reliable AC repair services across Lagos Island. Our expert technicians can diagnose and fix all AC issues, often same day." },
  { q: "How often should I service my AC unit?", a: "We recommend servicing your AC unit at least once every 3–6 months to maintain optimal performance and prevent costly breakdowns." },
  { q: "Do you install new air conditioning systems?", a: "Absolutely. We handle full AC installations for homes, offices, and commercial spaces of all sizes. We work with all major brands." },
  { q: "What does your AC maintenance service include?", a: "Our maintenance service includes filter cleaning, refrigerant level checks, electrical connections inspection, performance testing, and a detailed condition report." },
  { q: "Do you handle emergency HVAC repairs?", a: "Yes, we provide emergency HVAC repair services. Contact us immediately and we'll dispatch a technician as quickly as possible." },
  { q: "What general contracting services do you offer?", a: "We offer ductwork design and installation, full HVAC system overhauls, commercial-grade AC projects, and complete project management." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {q}
        <span className={`text-red-600 text-xl transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ⌄
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#fffdf0] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Get In Touch <span className="text-red-600">With Us</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have any question about HVAC services? Feel free to reach out to us — we respond fast.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Form */}
          <div className="bg-[#fffdf0] rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-red-600 font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 bg-white"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 bg-white"
                    />
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-500 focus:outline-none focus:border-red-400 bg-white"
                    >
                      <option value="">Select Service</option>
                      <option value="AC Repair">AC Repair</option>
                      <option value="AC Maintenance">AC Maintenance</option>
                      <option value="AC Installation">AC Installation</option>
                      <option value="General Contracting">General Contracting</option>
                    </select>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 bg-white resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    Send Now
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Our Contact Info</h2>
              <div className="space-y-5">
                {[
                  { icon: "📍", label: "Location", value: "Lagos Island, Lagos, Nigeria", href: null },
                  { icon: "📞", label: "Phone", value: "+234 704 7880 486", href: "tel:+2347047880486" },
                  { icon: "✉️", label: "Email", value: "info@joshlegend.com", href: "mailto:info@joshlegend.com" },
                  { icon: "⏰", label: "Working Hours", value: "Mon - Sat: 8am - 6pm\nEmergency services available", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-[#fffdf0] rounded-xl">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-600 hover:text-red-600 transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden h-64 bg-gray-100 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.3958!3d6.4551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fffdf0] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Frequently Asked Questions</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Got Questions? We Have Answers</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}