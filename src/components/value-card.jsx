import { MdLightbulbOutline } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
const ValueCard = ({ title, desc, icon }) => {
  const iconMap = {
    MdLightbulbOutline: (
      <MdLightbulbOutline className="h-20 w-20 text-secondary" />
    ),
    FaFire: <FaFire className="h-20 w-20 text-secondary" />,
    PiMedalLight: <PiMedalLight className="h-20 w-20 text-secondary" />,
  };

  return (
    <div className="flex h-[27.938rem] w-[23.48rem] flex-col space-y-3 border-t-4 border-t-secondary p-5 pt-10 shadow-lg">
      <div>{iconMap[icon]}</div>

      <h1 className="family-montserrat text-2xl font-semibold text-primary md:text-[1.75rem]">
        {title}
      </h1>
      {/* <h3 className="family-mplus text-base md:text-[1.125rem] font-normal uppercase text-secondary">
        {subtitle}
      </h3> */}
      <p className="family-montserrat text-[0.9rem] font-normal text-gray-700">
        {desc}
      </p>
    </div>
  );
};

export default ValueCard;
