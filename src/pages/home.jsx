import { useEffect } from "react";
import { Consultation, Services, Values, Gallery, Header, Partners } from "../sections";

const home = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Gallery />
      <Services /> 
      <Values />
      <Partners/>
      {/* <Consultation /> */}
    </>
  );
};

export default home;
