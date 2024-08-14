import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import home from "./pages/home";
import services from "./pages/services";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import about from "./pages/about";
import bookconsultation from "./pages/bookconsultation";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/about" Component={about} />
        <Route path="/services" Component={services} />
        <Route path="/contact" Component={Contact} />{" "}
        <Route path="/book-consultation" Component={bookconsultation} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
