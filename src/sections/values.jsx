import { Heading, ValueCard } from "../components";
import { ValueData } from "../constants";

const Values = () => {
  return (
    <div className="my-20">
      <Heading title={"Core Values"} className={"text-center"} />
      <div className="flex flex-wrap items-center justify-center gap-5 px-10 py-10">
        {ValueData.map((item, index) => (
          <ValueCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Values;
