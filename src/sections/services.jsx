import { Heading, Card } from "../components";
import { CardItems } from "../constants";

const Services = () => {
  return (
    <div className="py-32 w-full">
      <div className="w-full mx-auto md:w-4/5">
        <Heading
          title={"Our Services"}
          className={"px-2 text-center md:text-left"}
        />
        <div className="flex flex-wrap items-center justify-between px-2 py-10 md:px-0">
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
          <button className="family-montserrat border border-secondary px-10 py-3 font-semibold text-secondary transition hover:bg-secondary hover:text-white">
            FIND MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
