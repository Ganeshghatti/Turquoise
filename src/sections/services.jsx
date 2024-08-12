import { Heading, Card } from "../components";
import { CardItems } from "../constants";

const Services = () => {
  return (
    <div className="py-10">
      <Heading title={"Our Services"} className={"px-10 text-left"} />
      <div className="flex flex-wrap items-center justify-center py-10">
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
        <button className="family-montserrat border border-primary px-10 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white">
          FIND MORE
        </button>
      </div>
    </div>
  );
};

export default Services;
