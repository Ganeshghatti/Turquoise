import { useEffect } from "react";
import ServiceFooter from "../components/ServiceFooter";

const about = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="about family-montserrat h-screen">
        <div className="overlay">
          <div className="flex h-full w-full flex-col items-start justify-center gap-5 pl-5 text-white lg:w-1/2 lg:pl-24">
            <h1 className="family-garamond text-6xl font-semibold">About us</h1>
            <p className="text-2xl">
              Indulge your stay with our tailor-made services
            </p>
          </div>
        </div>
      </div>

      <section className="about-section mx-auto my-12 w-full lg:w-[85%] xl:w-[80%]">
        <div className="my-24 flex flex-wrap items-center text-center lg:text-left">
          <div className="w-full p-5 lg:w-1/2">
            <h1 className="family-montserrat text-3xl font-semibold">
              We Love To Explore New Worldwide Destinations.
            </h1>
          </div>
          <div className="family-montserrat w-full p-5 text-lg text-gray-600 lg:w-1/2">
            <p>
              Once a life time stay experiences, feeling home away from home by
              our personalized tailor-made services
            </p>
          </div>
        </div>
        <div className="my-10 flex flex-col items-center justify-center px-2 md:flex-row">
          <div className="flex h-fit flex-1 flex-col space-y-5 md:flex-row md:space-x-8">
            <div className="space-y-8">
              <img
                src="/consult-4.png"
                className="h-1/3 w-full object-cover md:w-[17.125rem]"
              />
              <img
                src="/service-3.png"
                className="h-3/5 w-full object-cover md:w-[17.375rem]"
              />
            </div>{" "}
            <div className="mt-10 flex flex-col items-center space-y-8 md:items-end">
              <img
                src="/service-1.jpg"
                className="h-[28.125rem] w-full object-cover md:w-[18.813rem]"
              />
              <img
                src="/gal-5.jpg"
                className="h-[14.063rem] w-full object-cover md:w-[18.813rem]"
              />
            </div>
          </div>{" "}
          <div className="mb-10 flex flex-1 flex-col items-center justify-center space-y-4 md:mb-0 md:items-start md:px-10">
            <h1 className="text-semibold family-garamond text-center text-[2.4rem] text-primary md:text-left md:text-[3rem]">
              Turquoise Concierge Tourism Management
            </h1>
            <p className="family-montserrat text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1rem]">
              Once a life time stay experiences, feeling home away from home by
              our personalized tailor-made services
            </p>
          </div>
        </div>{" "}
        <div className="my-12 flex flex-wrap items-center text-center md:my-24 lg:text-left">
          <div className="flex w-full justify-center p-5 lg:w-1/2">
            <h1 className="family-montserrat text-3xl font-semibold">
              Our Mission
            </h1>
          </div>
          <div className="family-montserrat flex w-full justify-center p-5 text-lg text-gray-600 lg:w-1/2">
            <p>
              Our mission is to curate exceptional, bespoke travel experiences
              that transcend the ordinary. We are dedicated to providing our
              clients with unparalleled luxury and personalized service,
              ensuring that every journey is an unforgettable adventure,
              meticulously tailored to their desires.
            </p>
          </div>
        </div>{" "}
        <div className="my-12 flex flex-col-reverse flex-wrap items-center text-center md:my-24 md:flex-row lg:text-left">
          <div className="family-montserrat flex w-full justify-center p-5 text-lg text-gray-600 lg:w-1/2">
            <p>
              Our vision is to be the world’s premier luxury concierge tourism
              provider, recognized for our commitment to excellence, innovation,
              and creating extraordinary experiences. We aspire to redefine the
              standards of luxury travel by continuously pushing boundaries,
              inspiring wanderlust, and turning dreams into reality for our
              discerning clientele
            </p>
          </div>{" "}
          <div className="flex w-full justify-center p-5 lg:w-1/2">
            <h1 className="family-montserrat text-3xl font-semibold">
              Our Vision
            </h1>
          </div>
        </div>
        <ServiceFooter />
      </section>
    </div>
  );
};

export default about;
