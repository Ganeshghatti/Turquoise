// eslint-disable-next-line no-unused-vars
import React from "react";

const ContactFooter = () => {
  const data = [
    {
      id: 1,
      image: "./assets/contact-icon-1.png",
      title: "Phone Number",
      desc: "+971 52 385 8844",
      link: "tel:+971523858844",
    },
    {
      id: 2,
      image: "./assets/contact-icon-2.png",
      title: "Our Address",
      desc: "Business Bay, Dubai- UAE",
      link: "https://www.google.co.in/maps/search/Emirates+Towers,+Level+42+Dubai,+United+Arab+Emirates/@25.2174757,55.2800645,17.1z?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D",
    },
    {
      id: 3,
      image: "./assets/contact-icon-3.png",
      title: "Our Email",
      desc: "info@turquoise-tourism.com",
      link: "mailto:info@turquoise-tourism.com",
    },
  ];

  return (
    <div className="bg-[#F8F8F8] py-24">
      <div className="flex flex-col gap-10">
        <h1 className="family-garamond px-5 text-center text-3xl md:text-4xl">
          Where You Can Find Us
        </h1>
        <div className="flex flex-wrap justify-center text-center">
          {data.map((item) => (
            <div className="w-full p-5 md:w-1/2 lg:w-1/3" key={item.id}>
              <img src={item.image} alt="contact" className="mx-auto" />
              <h2 className="family-garamond mb-3 mt-12 text-3xl">
                {item.title}
              </h2>
              <p className="family-montserrat text-lg text-gray-600">
                <a href={item.link} className="hover:underline" target="_blank">
                  {item.desc}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
