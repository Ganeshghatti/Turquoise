import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FooterOne, FooterTwo } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-around space-y-10 bg-secondary p-10 md:flex-row md:items-start">
      <div className="flex w-56 flex-col items-center md:py-0">
        <img src="/logo.png" className="h-48 w-48 object-contain" />
        <p className="family-montserrat md:Text-left text-center text-[1rem] font-medium text-white">
          Indulge your stay with our tailor-made services
        </p>
      </div>
      <div className="h-full space-y-5">
        <h1 className="family-montserrat text-center text-[1.75rem] font-bold text-white md:text-left">
          Quick Links
        </h1>
        <div className="flex w-full flex-col justify-center space-y-4 md:flex-row md:space-x-48 md:space-y-0">
          <div className="space-y-4">
            {FooterOne.map((item, index) => (
              <li
                key={index}
                className="family-montserrat cusror-pointer list-none text-center font-medium text-white md:text-left"
              >
                <Link to={item.link}> {item.title}</Link>
              </li>
            ))}
          </div>
          {/* 
          <div className="space-y-4">
            {FooterTwo.map((item, index) => (
              <li
                key={index}
                className="family-montserrat cusror-pointer list-none text-center font-medium text-white md:text-left"
              >
                {item.title}
              </li>
            ))}
          </div> */}
        </div>
      </div>
      <div className="h-full">
        <h1 className="family-montserrat pb-5 text-[1.75rem] font-bold text-white">
          Follow Us
        </h1>
        <div className="h-ful flex justify-center space-x-5 text-white">
          <a
            href="https://www.instagram.com/turquoise_concierge?igsh=N2ZscGtvZ2pxNGt1&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={34} />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle" // Add your Twitter link here
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX size={34} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
