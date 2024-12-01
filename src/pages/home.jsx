import { useEffect } from "react";
import { Reviews, Services, Values, Gallery, Header, Partners } from "../sections";

const home = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Gallery />
      <Partners/>
      <Services /> 
      <Reviews/>
      <Values />
      {/* <Consultation /> */}
    </>
  );
};

export default home;
