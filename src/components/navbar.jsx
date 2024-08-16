import { NavbarItems } from "../constants";
import logo from "../../public/logo.png";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
    if (
      location.pathname === "/" ||
      location.pathname === "/about" ||
      location.pathname === "/services"
    ) {
      setBgColor(scrollPosition > 650);
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/contact" || currentPath === "/book-consultation") {
      setBgColor(true);
    } else if (
      currentPath === "/" ||
      currentPath === "/about" ||
      currentPath === "/services"
    ) {
      setBgColor(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`navbar fixed z-10 flex w-full justify-between border-b border-b-white px-10 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-sm" : ""
      } ${bgColor ? "bg-secondary" : "bg-transparent"}`}
    >
      <div className="flex h-28 w-28 items-center">
        <Link to="/">
          <img src={logo} alt="site-logo" />
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex h-full items-center">
          {NavbarItems.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className="family-montserrat mx-2 flex h-full cursor-pointer items-center border-b-4 border-b-transparent px-6 text-base font-semibold text-white hover:border-b-secondary"
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="hidden items-center md:flex">
        {" "}
        <Link to="/book-consultation">
          <button className="family-montserrat border-2 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-secondary">
            Book Consultation
          </button>
        </Link>
      </div>
      <div className="flex items-center md:hidden">
        <button className="text-white">
          <BiMenu size={32} onClick={toggleNav} />
        </button>
        {toggle && (
          <div className="absolute right-0 top-0 h-screen w-[80%] bg-white py-10">
            <button className="absolute right-11 text-secondary">
              <RxCross2 size={32} onClick={toggleNav} />
            </button>
            <ul className="my-[16rem] flex flex-col items-center gap-4">
              {NavbarItems.map((item, index) => (
                <NavLink
                  to={item.link}
                  key={index}
                  onClick={toggleNav}
                  className="family-montserrat flex h-full cursor-pointer items-center border-b-4 border-b-transparent px-6 text-[1.125rem] font-semibold text-secondary hover:border-b-secondary"
                >
                  {item.title}
                </NavLink>
              ))}
              <Link to="/book-consultation">
                <button className="family-montserrat hover:white mx-6 my-2 border border-secondary px-3 py-3 font-semibold text-secondary transition hover:bg-secondary hover:text-white">
                  Book Consultation
                </button>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
