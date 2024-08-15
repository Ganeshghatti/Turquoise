import { SlSettings } from "react-icons/sl";

// eslint-disable-next-line react/prop-types
const ValueCard = ({ title, subtitle, desc }) => {
  return (
    <div className="flex h-[27.938rem] w-[23.48rem] flex-col space-y-3 border-t-4 border-t-secondary p-5 pt-10 shadow-lg">
      <SlSettings className="h-24 w-24 text-secondary" />
      <h1 className="family-montserrat text-2xl md:text-[1.75rem] font-semibold text-primary">
        {title}
      </h1>
      <h3 className="family-mplus text-base md:text-[1.125rem] font-normal uppercase text-secondary">
        {subtitle}
      </h3>
      <p className="family-montserrat text-[0.9rem] font-normal text-gray-700">
        {desc}
      </p>
    </div>
  );
};

export default ValueCard;
