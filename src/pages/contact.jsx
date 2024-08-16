import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ContactFooter from "../components/ContactFooter";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="pt-24">
      <ContactFooter />
      <div className="px-5 py-10 text-center">
        <p className="family-montserrat lg:text-xl">
          Turquoise Concierge Tourism
        </p>
        <h1 className="family-garamond text-3xl font-semibold text-gray-800 lg:text-5xl">
          Indulge your stay with our tailor-made services{" "}
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
