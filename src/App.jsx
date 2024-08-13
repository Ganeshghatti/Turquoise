import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import home from "./pages/home";
import services from "./pages/services";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import about from "./pages/about";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={home} />
        {/* <Route path="/about" Component={about} /> */}
        <Route path="/services" Component={services} />
        <Route path="/contact" Component={Contact} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
};

export default App;
