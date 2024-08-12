import { NavbarItems } from "../constants";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <div className="border-b-primary bg-primary flex w-full justify-between border-b px-10">
      <div className="flex h-32 w-32 items-center">
        <img src={logo} alt="site-logo" />
      </div>
      <div>
        <ul className="flex h-full items-center">
          {NavbarItems.map((item, index) => (
            <li
              key={index}
              className="family-montserrat hover:border-b-secondary mx-2 flex h-full cursor-pointer items-center border-b-4 border-b-transparent px-6 text-[1.125rem] font-semibold text-white"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <button className="family-montserrat hover:text-primary border px-3 py-3 font-semibold text-white transition hover:bg-white">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default Navbar;
