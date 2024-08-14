import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import home from "./pages/home";
import services from "./pages/services";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
    <Toaster containerClassName="family-montserrat"/>
      <Navbar />
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/services" Component={services} />
        <Route path="/contact" Component={Contact} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
};

export default App;
