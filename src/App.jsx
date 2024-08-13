import "./App.css";

import { Consultation, Services, Values, Gallery } from "./sections";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Gallery />
      <Services />
      <Consultation />
      <Values />
      <Footer />
    </div>
  );
};

export default App;
