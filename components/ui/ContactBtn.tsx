'use client';

import {useState } from 'react';

const ContactBtn = () => {
  
  const [showForm, setShowForm] = useState(false);
  
  return (
    <>
      <button className="px-4 py-2 rounded bg-primary text-base text-background cursor-pointer">Contact Me</button>
      <section className={`h-screen w-screen fixed items-center justify-center
      ${showForm ? "flex" : "hidden"}
      `}>
        <form className="h-max w-[450px] rounded bg-accent px-10">
          <header className="py-10 w-full h-max border-b border-grey">
            <h2 className="text-center text-3xl font-bold">Message Me</h2>
          </header>
          <div className="h-max w-full">
            
          </div>
          <div className="h-max w-full py-10 border-t border-grey">
            <button type="submit" className="h-max w-full bg-primary text-background rounded text-center">Send Message</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ContactBtn;