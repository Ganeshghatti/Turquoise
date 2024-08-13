import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import home from "./pages/home";
import services from "./pages/services";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/services" Component={services} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
};

export default App;
