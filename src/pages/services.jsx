import Accordion from "../components/Accordion";
import ServiceFooter from "../components/ServiceFooter";
import React, { useState } from "react";

const services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="services h-screen">
        <div className="overlay">
          <div className="flex h-full w-full flex-col items-start justify-center gap-5 pl-5 text-white lg:w-1/2 lg:pl-24">
            <h1 className="family-garamond text-6xl font-semibold">Services</h1>
            <p className="family-montserrat text-2xl">
              More than just a concierge service, Carpentum Lifestyle Management
              has built a 360-degree lifestyle offering dedicated by the needs
              and wants of its clients.
            </p>
          </div>
        </div>
      </div>

      <section className="service-section mx-auto my-12 w-full lg:w-[85%] xl:w-[80%]">
        <div className="my-24 flex flex-wrap items-center text-center lg:text-left">
          <div className="w-full p-5 lg:w-1/2">
            <h1 className="family-montserrat text-3xl font-semibold">
              More than Luxury
            </h1>
          </div>
          <div className="family-montserrat w-full p-5 text-lg text-gray-600 lg:w-1/2">
            <p>
              In addition to providing bespoke access to day-to-day assistance,
              it has teams in place to manage everything – just for you.
            </p>
          </div>
        </div>
        <div
          className="family-montserrat flex flex-wrap items-center"
          id="travel-design"
        >
          <div className="w-full lg:w-1/2">
            <img
              src="/service-1.jpg"
              alt=""
              loading="lazy"
              className="w-full object-contain object-center"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-10 p-5 text-lg text-gray-600 lg:w-1/2 lg:p-10">
            <h1 className="text-3xl font-semibold text-black lg:text-4xl">
              Travel Design
            </h1>
            <p>
              We believe that travel should be a deeply personal and
              transformative experience. Our Travel Design Services are the
              cornerstone of our commitment to delivering journeys that are not
              just luxurious but also uniquely tailored to your individual
              desires and aspirations.
            </p>

            <p>
              Our approach to travel design starts with you. We begin by
              understanding your interests, preferences, and travel goals.
              Whether you seek the thrill of adventure, the serenity of a
              private retreat, or an immersive cultural exploration, we listen
              carefully to your vision. This personalized consultation allows us
              to curate an itinerary that is a true reflection of your tastes
              and style, ensuring every detail aligns with your expectations.
            </p>

            <p>
              Excellence is in the details, and we take pride in our meticulous
              attention to every aspect of your journey. From selecting the
              finest accommodations and exclusive experiences to arranging
              seamless logistics, we leave nothing to chance. Our team of
              seasoned travel designers leverages an extensive network of global
              partners to access the most coveted destinations, hidden gems, and
              elite services. Every element of your trip is thoughtfully
              considered and flawlessly executed, allowing you to travel with
              confidence and ease.
            </p>

            <Accordion
              title="Exclusive Experiences"
              isOpen={openIndex === 1}
              onClick={() => toggleAccordion(1)}
            >
              <p>
                We are passionate about creating experiences that go beyond the
                ordinary. Our Travel Design Services include access to unique,
                insider opportunities that are often unavailable to the general
                public. Imagine dining with a Michelin-starred chef in a private
                setting, exploring a world-renowned museum after hours, or
                enjoying a personalized guided tour of an ancient city with a
                leading historian.
              </p>
            </Accordion>

            <Accordion
              title="Seamless and Stress-Free Travel"
              isOpen={openIndex === 2}
              onClick={() => toggleAccordion(2)}
            >
              <p>
                Your peace of mind is our priority. Our team takes care of all
                the logistics, from airport transfers and private charters to
                last-minute changes and special requests. We provide 24/7
                support throughout your journey, ensuring that every aspect of
                your trip runs smoothly.
              </p>
            </Accordion>

            <Accordion
              title="A Journey That Reflects You"
              isOpen={openIndex === 3}
              onClick={() => toggleAccordion(3)}
            >
              <p>
                No two travelers are alike, and no two journeys should be
                either. Our Travel Design Services are about more than just
                planning a trip—they’re about crafting a journey that is as
                unique as you are.
              </p>
            </Accordion>

            <button className="family-montserrat px-12 py-4 text-lg font-bold text-white">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
        <div
          className="family-montserrat flex flex-wrap-reverse items-center"
          id="luxury-cars"
        >
          <div className="flex w-full flex-col items-start gap-10 p-5 text-lg text-gray-600 lg:w-1/2 lg:p-10">
            <h1 className="text-3xl font-semibold text-black lg:text-4xl">
              Luxury Cars & Chauffeurs
            </h1>
            <p>
              We, at Carpentum Lifestyle Management work around the clock and
              around the world to ensure your wishes are always fulfilled. You
              will take care of the dreams and we will take care of the details.
            </p>
            <p>
              Whatever you want, whenever you want. No matter the size or time
              of day, or experienced team will always be on hand to produce. We
              spend our days creating, cultivating & crafting for the world’s
              elite. Utilising our global partners & international team to
              provide you with access to the inaccessible.
            </p>
            <p>
              As a Global Lifestyle Management Service provider, we truly
              understand what it is to provide luxury effortlessly.
            </p>
            <button className="family-montserrat px-12 py-4 text-lg font-bold text-white">
              BOOK CONSULTATION
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="./service-2.jpg"
              alt=""
              loading="lazy"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
        <div
          className="family-montserrat flex flex-wrap items-center"
          id="private-jet"
        >
          <div className="w-full lg:w-1/2">
            <img
              src="./service-3.png"
              alt=""
              loading="lazy"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-10 p-5 text-lg text-gray-600 lg:w-1/2 lg:p-10">
            <h1 className="text-3xl font-semibold text-black lg:text-4xl">
              Private Jet & Air Transport
            </h1>
            <p>
              Beauty is a gift and wellness is a luxury! Indulge your senses to
              countless memorable experiences with unforgettable wellness treats
              at your fingertips ready to be unwrapped.
            </p>
            <p>
              We hold a true passion for wellness, placing your physical,
              emotional and mental wellbeing at the centre of everything we do.
            </p>
            <button className="family-montserrat px-12 py-4 text-lg font-bold text-white">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
        <ServiceFooter />
      </section>
    </div>
  );
};

export default services;
