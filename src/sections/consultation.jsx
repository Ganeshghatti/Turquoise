import { Link } from "react-router-dom";
import { ConsultGallery } from "../components";

const Consultation = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col items-center space-y-5 px-5 md:px-20">
        <h3 className="family-mplus text-[0.8rem] font-normal uppercase text-secondary md:px-8 md:text-[1.25rem]">
          MORE THAN LUXURY
        </h3>
        <h1 className="family-montserrat text-center text-[1.3rem] font-normal text-black md:text-[2.9rem]">
          Welcome to the world of{" "}
          <span className="font-bold">Turquoise Concierge</span> tourism
          Management
        </h1>
        <p className="family-montserrat text-center text-[0.6rem] font-normal text-gray-800 md:text-[1rem]">
          More than just a consierge service,Turquoise Concierge has built a
          360-degree lifestyle offering dedicated by the needs and wants of its
          clients. In addition to providing bespoke access to day-to-day
          assistance, it has teams in place to manage everything - just for you.
        </p>
        <Link to="/book-consultation">
          {" "}
          <button className="family-montserrat mt-10 border border-secondary bg-secondary px-10 py-3 font-semibold text-white transition hover:bg-white hover:text-secondary">
            Book Consultation
          </button>
        </Link>
      </div>
      <ConsultGallery />
    </div>
  );
};

export default Consultation;
