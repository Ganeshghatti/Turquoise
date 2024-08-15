import React from "react";

const ContactFooter = () => {
  const data = [
    {
      id: 1,
      image: "./contact-icon-1.png",
      title: "Phone Number",
      desc: "+971 54 557 3367",
    },
    {
      id: 2,
      image: "./contact-icon-2.png",
      title: "Our Address",
      desc: "Emirates Towers, Level 42 Dubai, United Arab Emirates",
    },
    {
      id: 3,
      image: "./contact-icon-3.png",
      title: "Our Email",
      desc: "info@carpentumlsm.com",
    },
  ];
  return (
    <div className="bg-[#F8F8F8] py-24">
      <div className="flex flex-col gap-10">
        <h1 className="family-garamond px-5 text-center text-3xl md:text-4xl">
          Where You Can Find Us
        </h1>
        <div className="flex flex-wrap text-center">
          {data.map((item) => {
            return (
              <div className="w-full p-5 md:w-1/2 lg:w-1/3" key={item.id}>
                <img src={item.image} alt="contact" className="mx-auto" />
                <h2 className="family-garamond mb-3 mt-12 text-3xl">
                  {item.title}
                </h2>
                <p className="family-montserrat text-lg text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
