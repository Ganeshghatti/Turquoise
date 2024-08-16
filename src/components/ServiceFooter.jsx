import React from "react";
import { Link } from "react-router-dom";

const ServiceFooter = () => {
  return (
    <div className="service-footer mx-auto mt-12 flex h-[40vh] w-11/12 flex-col items-center justify-center gap-10 bg-[#149088] md:w-full md:flex-row md:justify-evenly">
      <h1 className="family-garamond text-center text-3xl text-white md:text-left md:text-5xl">
        Book your  <br className="hidden md:block" />
        luxury concierge
      </h1>
      <Link to="/book-consultation" className="flex justify-center">
        <button className="family-montserrat mx-auto w-3/4 bg-white px-12 py-4  font-semibold text-gray-600 transition hover:bg-[#149088] hover:text-white md:w-full">
          BOOK YOUR CONSULTATION
        </button>
      </Link>
    </div>
  );
};

export default ServiceFooter;
