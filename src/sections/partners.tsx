import React from "react";
import { Heading } from "../components";

const PartnersItems = [
    '/assets/partner(1).jpeg',
    '/assets/partner(2).jpeg',
    '/assets/partner(3).jpeg',
    '/assets/partner(4).jpeg',
    '/assets/partner(5).jpeg',

]

const Partners = () => {
  return (
    <div className="w-full py-32">
      <div className="mx-auto w-full md:w-4/5">
        <Heading title={"Our Partners"} className={"px-2 text-center"} />
        <div className="flex overflow-hidden flex-row gap-1  w-full flex-wrap  items-center justify-between px-5 py-10 md:px-0">
         {PartnersItems.map((item, index) => (
            <Card key={index} link={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Card({link}) {
  return (
    
      <div className=" w-[49%] md:w-[19%]  flex flex-row items-center justify-center">
          <img src={link} className=" w-full object-cover" />
    
      
      </div>
  );
}

export default Partners;
