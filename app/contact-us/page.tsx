"use client";

import { useState } from "react";
import ContactForm from "@/components/ui/ContactForm";
import ContactUs from "@/components/sections/ContactUs";
import FAQs from "@/components/sections/Faqs";


export default function ContactPage() {
  
  return (
    <>
    {/* Hero */}
    <section className="bg-background py-20 px-6">
    <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Contact Us</p>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
        Get In Touch <span className="text-primary">With Us</span>
        </h1>
        <p className="text-text text-lg max-w-xl mx-auto">
        Have any question about HVAC services? Feel free to reach out to us — we respond fast.
        </p>
    </div>
    </section>
    <ContactUs />
    <FAQs />
    </>
  );
}