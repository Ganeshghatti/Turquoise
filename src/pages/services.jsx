import ServiceFooter from "../components/ServiceFooter";

const services = () => {
  return (
    <div>
      <div className="services h-screen">
        <div className="overlay">
          <div className="flex h-full w-full flex-col items-start justify-center gap-5 pl-5 text-white lg:w-1/2 lg:pl-24">
            <h1 className="text-6xl font-semibold family-garamond">Services</h1>
            <p className="text-2xl family-montserrat">
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
            <h1 className="text-3xl font-semibold family-montserrat">More than Luxury</h1>
          </div>
          <div className="w-full p-5 text-lg text-gray-600 lg:w-1/2 family-montserrat">
            <p>
              In addition to providing bespoke access to day-to-day assistance,
              it has teams in place to manage everything – just for you.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center family-montserrat" id="travel-design">
          <div className="w-full lg:w-1/2">
            <img
              src="/service-1.jpg"
              alt=""
              loading="lazy"
              className="w-full object-contain object-center"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-10 p-5 text-lg text-gray-600 lg:w-1/2 lg:p-10">
            <h1 className="text-3xl font-semibold text-black lg:text-4xl ">
              Travel Design
            </h1>
            <p>
              Welcome to our world of luxury tailor-made travel. Our dedicated
              global network of travel specialistsx unearth the most amazing
              destinations and curate bespoke travel experiences. From luxury
              hotels to the finest resorts, private islands, and alpine
              retreats, we plan and curate one-of-a-kind holidays, tailored to
              personal desires.
            </p>
            <p>
              Our dedicated travel specialists have journeyed across the globe
              to personally experience the world’s best destinations and travel
              experiences. From luxury beach resorts and alpine retreats to
              country houses, desert safaris and treetop escapes, they are
              experts at creating bespoke travel packages for romantic getaways,
              special reunions, and honeymoons our customers will treasure
              forever.
            </p>
            <button className="family-montserrat px-12 py-4 text-lg font-bold text-white">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
        <div className="flex flex-wrap-reverse items-center family-montserrat" id="luxury-cars">
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
        <div className="flex flex-wrap items-center family-montserrat" id="private-jet">
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
