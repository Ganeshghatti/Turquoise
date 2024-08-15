import { Link, useLocation } from "react-router-dom";
import Accordion from "../components/Accordion";
import ServiceFooter from "../components/ServiceFooter";
import { useEffect } from "react";

const services = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Check for the hash in the URL and scroll to the corresponding section
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
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
              <p>
                Our approach to travel design starts with you. We begin by
                understanding your interests, preferences, and travel goals.
                Whether you seek the thrill of adventure, the serenity of a
                private retreat, or an immersive cultural exploration, we listen
                carefully to your vision. This personalized consultation allows
                us to curate an itinerary that is a true reflection of your
                tastes and style, ensuring every detail aligns with your
                expectations.
              </p>
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
            <Link to="/book-consultation">
              <button className="family-montserrat px-12 py-4 text-lg font-bold text-white">
                BOOK CONSULTATION
              </button>
            </Link>
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
              Luxury begins the moment you step out of your door. Our Luxury
              Cars & Chauffeur Services are designed to provide you with the
              highest level of comfort, style, and convenience as you travel.
              Whether you require transportation for a special occasion,
              business travel, or leisure, we offer a fleet of the world’s most
              prestigious vehicles and a team of professional chauffeurs
              dedicated to ensuring your journey is as seamless as it is
              sophisticated.
            </p>
            <p>
              <b>An Exquisite Fleet of Luxury Vehicles:</b>
              <br />
              Our fleet is a collection of the finest luxury vehicles,
              meticulously maintained to offer the ultimate in comfort and
              elegance. From sleek sedans and powerful SUVs to opulent
              limousines and rare, exotic cars, we provide a range of options to
              suit your specific needs and preferences. Each vehicle is equipped
              with the latest technology and amenities, ensuring that your ride
              is not only smooth but also an experience in itself. Whether
              you’re looking for the quiet refinement of a Rolls-Royce, the
              dynamic performance of a Bentley, or the classic elegance of a
              Mercedes-Benz, our selection promises to meet and exceed your
              expectations.
            </p>
            <Link to="/book-consultation">
              <button className="family-montserrat px-12 py-4 text-lg font-bold text-white">
                BOOK CONSULTATION
              </button>
            </Link>
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
              We understand that time is your most valuable asset, and every
              moment of your journey should be as luxurious and effortless as
              your destination. Our Private Jet & Air Transport Services are
              designed to provide you with the ultimate in privacy, comfort, and
              convenience. Whether you’re flying for business or pleasure, our
              bespoke air travel solutions ensure that every aspect of your
              journey is tailored to your exacting standards.
            </p>
            <p>
              <b>The Pinnacle of Luxury in Air Travel:</b>
              <br /> Our Private Jet Services offer a level of exclusivity and
              sophistication that commercial airlines simply cannot match.
              Imagine bypassing the hassles of crowded airports, long security
              lines, and restrictive schedules. With us, you have the freedom to
              fly according to your own timetable, from the airport of your
              choice, to the most convenient location near your final
              destination. Our extensive network of private jets includes a
              range of aircraft to suit your needs, from light jets perfect for
              short hops to ultra-long-range jets designed for global travel.
              Each aircraft is outfitted with state-of-the-art amenities, plush
              interiors, and the latest in-flight entertainment options,
              ensuring that your journey is not just a means to an end, but an
              experience to savor.
            </p>
            <Link to="/book-consultation">
              <button className="family-montserrat px-12 py-4 text-lg font-bold text-white">
                BOOK CONSULTATION
              </button>
            </Link>
          </div>
        </div>
        <ServiceFooter />
      </section>
    </div>
  );
};

export default services;
