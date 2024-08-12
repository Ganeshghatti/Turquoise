import "./App.css";
import { Navbar } from "./components";
// import { Header } from "./sections";
import { Consultation, Services, Values, Gallery } from "./sections";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Gallery />
      <Services />
      <Consultation />
      <Values />
    </div>
  );
};

export default App;
