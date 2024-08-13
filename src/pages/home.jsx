import { Consultation, Services, Values, Gallery, Header } from "../sections";
import { Footer } from "../components";
const home = () => {
  return (
    <>
      <Header />
      <Gallery />
      <Services />
      <Consultation />
      <Values />
      <Footer />
    </>
  );
};

export default home;
