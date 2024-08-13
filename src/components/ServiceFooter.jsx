import React from "react";

const ServiceFooter = () => {
  return (
    <div className="service-footer mt-12 flex h-[40vh] w-full flex-col items-center justify-center gap-10 bg-[#149088] md:flex-row md:justify-evenly">
      <h1 className="text-center text-3xl text-white md:text-left md:text-5xl">
        Your luxury <br className="hidden md:block" />
        concierge, awaits.
      </h1>
      <button className="family-montserrat bg-white px-12 py-4 font-bold text-gray-800 transition hover:bg-[#149088] hover:text-white">
        BOOK YOUR CONSULTATION
      </button>
    </div>
  );
};

export default ServiceFooter;
