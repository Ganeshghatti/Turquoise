import ServiceFooter from "../components/ServiceFooter";

const about = () => {
  return (
    <div>
      <div className="about family-montserrat h-screen">
        <div className="overlay">
          <div className="flex h-full w-full flex-col items-start justify-center gap-5 pl-5 text-white lg:w-1/2 lg:pl-24">
            <h1 className="text-6xl font-semibold family-garamond">About us</h1>
            <p className="text-2xl">Turquoise Concierge Tourism</p>
          </div>
        </div>
      </div>

      <section className="about-section mx-auto my-12 w-full lg:w-[85%] xl:w-[80%]">
        <div className="my-24 flex flex-wrap items-center text-center lg:text-left">
          <div className="w-full p-5 lg:w-1/2">
            <h1 className="text-3xl font-semibold family-montserrat">
              We Love To Explore New Worldwide Destinations.
            </h1>
          </div>
          <div className="w-full p-5 text-lg text-gray-600 lg:w-1/2 family-montserrat">
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
        <div className="md:my-24 my-12 flex flex-wrap items-center text-center lg:text-left">
          <div className="w-full p-5 lg:w-1/2 flex justify-center">
            <h1 className="text-3xl font-semibold family-montserrat">Our Aim</h1>
          </div>
          <div className="w-full p-5 text-lg text-gray-600 lg:w-1/2 flex justify-center family-montserrat">
            <p>
              As a global bespoke lifestyle company, we’ve built our distinctive
              identity by prioritizing quality over quantity, by curating the
              most authentic and inspiring experiences imaginable and by
              cultivating long lasting relationships with our clients and
              members around the world.
            </p>
          </div>
        </div>{" "}
        <div className="md:my-24 my-12 flex md:flex-row flex-col-reverse flex-wrap items-center text-center lg:text-left">
          <div className="w-full p-5 text-lg text-gray-600 lg:w-1/2 flex justify-center family-montserrat">
            <p>
              To bring forth the best in class lifestyle services around the
              world by striving continually for perfection and offering
              excellence to our clients.
            </p>
          </div>{" "}
          <div className="w-full p-5 lg:w-1/2 flex justify-center">
            <h1 className="text-3xl font-semibold family-montserrat">Our Vision</h1>
          </div>
        </div>
        <ServiceFooter />
      </section>
    </div>
  );
};

export default about;
