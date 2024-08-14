import React from "react";
import ContactFooter from "../components/ContactFooter";
import BookConsultationForm from "../components/BookConsultationForm";

const bookconsultation = () => {
  return (
    <section className="pt-20">
      <div className="mt-8 px-5 py-12 text-center">
        <p className="family-montserrat lg:text-xl">Free Consultation</p>
        <h1 className="family-garamond text-3xl font-semibold text-gray-800 lg:text-5xl">
          Fill up the form and
          <br /> we will be in touch with you shortly{" "}
        </h1>
      </div>
      {/* <div className='lg:w-[80%] w-full  mx-auto'>
                <img src="./contact-bg.jpg" alt="contact" className='object-cover object-center' loading='lazy' />
            </div> */}

      <BookConsultationForm />
    </section>
  );
};

export default bookconsultation;
