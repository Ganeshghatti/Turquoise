import React from "react";
import ContactForm from "../components/ContactForm";
import ContactFooter from "../components/ContactFooter";

const Contact = () => {
  return (
    <section className="pt-20">
      <ContactFooter />
      <div className="px-5 py-12 mt-8 text-center">
        <p className="family-garamond lg:text-xl">
          Turquoise Concierge Lifestyle Management
        </p>
        <h1 className="family-garamond text-3xl font-semibold text-gray-800 lg:text-5xl">
          Your Luxury Concierge, Awaits.
        </h1>
      </div>
      {/* <div className='lg:w-[80%] w-full  mx-auto'>
                <img src="./contact-bg.jpg" alt="contact" className='object-cover object-center' loading='lazy' />
            </div> */}

      <ContactForm />
    </section>
  );
};

export default Contact;
