import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import home from "./pages/home";
import services from "./pages/services";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import { Toaster } from "react-hot-toast";
import about from "./pages/about";
import bookconsultation from "./pages/bookconsultation";
import { FaWhatsapp } from "react-icons/fa";

const App = () => {
  const phoneNumber = "971569853400";

  return (
    <BrowserRouter>
      <Toaster containerClassName="family-montserrat" />
      <Navbar />
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/about" Component={about} />
        <Route path="/services" Component={services} />
        <Route path="/contact" Component={Contact} />{" "}
        <Route path="/book-consultation" Component={bookconsultation} />
      </Routes>
      {/* Chat Button */}
      <a
        className="fixed bottom-8 right-8 flex h-14 w-14 animate-bounce cursor-pointer items-center justify-center rounded-full bg-[#149088] text-white"
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer" // added for security
      >
        <FaWhatsapp size={30} />
      </a>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
