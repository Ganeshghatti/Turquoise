// eslint-disable-next-line react/prop-types
const Card = ({ title, desc, link, image }) => {
  return (
    <div className="relative mx-3 my-2 w-[22rem]">
      <img src={image} className="w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 flex h-full items-end bg-black/40 p-5">
        <div className="flex h-[12rem] flex-col justify-start space-y-3">
          <div>
            <h1 className="family-montserrat text-[1.5rem] font-semibold text-white">
              {title}
            </h1>
            <p className="family-montserrat text-[0.875rem] font-semibold text-white">
              {desc}
            </p>
          </div>
          <div className="h-fits flex items-end">
            <a
              className="famiy-montserrat text-[0.875rem] font-semibold uppercase text-white"
              href={link}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
