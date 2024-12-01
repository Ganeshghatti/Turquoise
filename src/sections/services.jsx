import { Link } from "react-router-dom";
import { Heading, Card } from "../components";
import { CardItems } from "../constants";

const Services = () => {
  return (
    <div className="w-full py-32">
      <div className="mx-auto w-full md:w-4/5">
        <Heading
          title={"Our Services"}
          className={"px-2 text-center"}
        />
        <div className="flex flex-wrap items-center justify-between px-5 py-10 md:px-0 w-full">
          {CardItems.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              link={item.link}
              image={item.image}
            />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Link to="/services">
            <button className="family-montserrat border border-secondary px-10 py-3 font-semibold text-secondary transition hover:bg-secondary hover:text-white">
              FIND MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
