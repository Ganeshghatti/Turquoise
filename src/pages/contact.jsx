import React from "react";
import ContactForm from "../components/ContactForm";
import ContactFooter from "../components/ContactFooter";
import { CiChat1 } from "react-icons/ci";

const Contact = () => {
  const phoneNumber = "918976328175";

  return (
    <section className="pt-24">
      <ContactFooter />
      <div className="px-5 py-12 text-center">
        <p className="family-montserrat lg:text-xl">Turquoise Concierge </p>
        <h1 className="family-garamond text-3xl font-semibold text-gray-800 lg:text-5xl">
          Indulge your stay with our tailor-made services{" "}
        </h1>
      </div>

      {/* <div className='lg:w-[80%] w-full  mx-auto'>
                <img src="./contact-bg.jpg" alt="contact" className='object-cover object-center' loading='lazy' />
            </div> */}

      <ContactForm />

      {/* Chat Button */}
      <a
        className="fixed bottom-8 right-8 flex h-12 w-12 animate-bounce cursor-pointer items-center justify-center rounded-full bg-[#149088] text-white"
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
      >
        <CiChat1 size={25} />
      </a>
    </section>
  );
};

export default Contact;
