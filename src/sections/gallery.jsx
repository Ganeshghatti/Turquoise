import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center px-2 md:flex-row md:px-20">
      <div className="mb-10 flex flex-1 flex-col items-center justify-center space-y-4 md:mb-0 md:items-start md:px-10">
        <h1 className="text-semibold family-garamond text-center text-[2.4rem] text-primary md:text-left md:text-[3rem]">
          Turquoise Concierge Tourism Management
        </h1>
        <p className="family-montserrat text-center text-[0.9rem] font-normal text-black md:text-left md:text-[1rem]">
          Once a life time stay experiences, feeling home away from home by our
          personalized tailor-made services.
        </p>
        <Link to="/about">
          {" "}
          <button className="family-montserrat mt-4 border border-secondary bg-secondary px-5 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-secondary">
            Read More
          </button>
        </Link>
      </div>
      <div className="flex h-fit flex-1 flex-col space-y-5 md:flex-row md:space-x-5">
        <div className="mt-10 flex flex-col items-center space-y-4 md:items-end">
          <img
            src="/assets/gal-1.jpg"
            className="h-[14.063rem] w-full object-cover md:w-[15.688rem]"
          />
          <img
            src="/assets/consult-5.png"
            className="h-[28.125rem] w-full object-cover md:w-[18.813rem]"
          />
        </div>
        <div className="space-y-4">
          <img
            src="/assets/gal-3.png"
            className="h-[25rem] w-full object-cover md:w-[17.375rem]"
          />
          <img
            src="/assets/gal-5.jpg"
            className="h-[11.875rem] w-full object-cover md:w-[17.125rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
