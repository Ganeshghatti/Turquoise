import { NavbarItems } from "../constants";
import logo from "../../public/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 flex w-full justify-between border-b border-b-secondary bg-[#149088] px-10">
      <div className="flex h-28 w-28 items-center">
        <img src={logo} alt="site-logo" />
      </div>
      <div>
        <ul className="flex h-full items-center">
          {NavbarItems.map((item, index) => (
            <NavLink to={item.link}
              key={index}
              className="family-montserrat mx-2 flex h-full cursor-pointer items-center border-b-4 border-b-transparent px-6 text-[1.125rem] font-semibold text-white hover:border-b-secondary"
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <button className="family-montserrat border px-3 py-3 font-semibold text-white transition hover:bg-white hover:text-primary">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default Navbar;
