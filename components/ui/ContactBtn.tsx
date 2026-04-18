'use client';

import { useState } from 'react';


const ContactBtn = () => {
  
  const [showForm, setShowForm] = useState(false);

  const btnClicked = () => {
    setShowForm(true);
  }

  const removeForm = () => {
    setShowForm(false);
  }
  
  return (
    <>
      <button onClick={btnClicked} className="px-4 py-2 rounded bg-primary text-base text-background cursor-pointer">Contact Me</button>
      <section onClick={removeForm} className={`bg-header/500 h-screen w-screen fixed items-center justify-center top-0 left-0
      ${showForm ? "flex" : "hidden"}
      `}>
        <form className="relative z-10 h-max w-[450px] rounded bg-accent px-10">
          <header className="py-10 w-full h-max border-b border-grey">
            <h2 className="text-center text-3xl font-bold">Message Me</h2>
          </header>
          <div className="h-max w-full">
            <div className="h-max w-full mb-3">
              <label htmlFor="fullname" className="text-grey">Fullname: </label>
              <input type="text" name="fullname" id="fullname" className="h-10 w-full border border-grey px-5 text-base rounded" />
            </div>
            <div className="h-max w-full mb-3">
              <label htmlFor="email" className="text-grey">Email: </label>
              <input type="text" name="email" id="email" className="h-10 w-full border border-grey px-5 text-base rounded" />
            </div>
            <div className="h-max w-full mb-3">
              <label htmlFor="phone" className="text-grey">Phone Number: </label>
              <input type="text" name="phone" id="phone" className="h-10 w-full border border-grey px-5 text-base rounded" />
            </div>
            <div className="h-max w-full mb-3">
              <label htmlFor="message" className="text-grey">Message: </label>
              <textarea name="message" id="message" className="max-h-40 min-h-40 max-w-full min-w-full" ></textarea>
            </div>
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