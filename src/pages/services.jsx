import Values from "../sections/values"

const services = () => {
  return (
    <div>
      <div className="h-[80vh] services family-montserrat">
     
        <div className="overlay">
          <div className="lg:w-1/2  w-full lg:ml-24 md:ml-12  ml-5 flex flex-col gap-5 text-white items-start justify-center h-full">
            <h1 className="text-5xl font-semibold">Services</h1>
            <p className="text-xl">More than just a concierge service, Carpentum Lifestyle Management has built a 360-degree lifestyle offering dedicated by the needs and wants of its clients.</p>
          </div>
        </div>
      </div>
      <div className='lg:w-[85%] w-full my-12  mx-auto flex flex-wrap items-center'>
        <div className='lg:w-1/2 w-full'>
         <h1 className="text-3xl font-semibold">More than Luxury</h1>
        </div>
        <div className='lg:w-1/2 p-5 w-full text-lg text-gray-600'>
       <p>In addition to providing bespoke access to day-to-day assistance, it has teams in place to manage everything – just for you.</p>
        </div>

      </div>
      <div>

      </div>
      <div className='lg:w-[85%] w-full  mx-auto flex flex-wrap items-center'>
        <div className='lg:w-1/2 w-full'>
          <img src="./service-1.jpg" alt="" loading="lazy" className="w-full h-full object-cover object-center" />
        </div>
        <div className='lg:w-1/2 p-5 w-full flex flex-col gap-10 items-start text-lg text-gray-600'>
          <h1 className='lg:text-4xl text-3xl font-semibold text-black'>Travel Design</h1>
          <p>Welcome to our world of luxury tailor-made travel. Our dedicated global network of travel specialistsx unearth the most amazing destinations and curate bespoke travel experiences. From luxury hotels to the finest resorts, private islands, and alpine retreats, we plan and curate one-of-a-kind holidays, tailored to personal desires.</p>
          <p>Our dedicated travel specialists have journeyed across the globe to personally experience the world’s best destinations and travel experiences. From luxury beach resorts and alpine retreats to country houses, desert safaris and treetop escapes, they are experts at creating bespoke travel packages for romantic getaways, special reunions, and honeymoons our customers will treasure forever.</p>
          <button className='px-6 py-2 bg-[#1A5830] text-white'>BOOK CONSULTATION</button>
        </div>

      </div>
      <div className='lg:w-[85%] w-full mx-auto flex flex-wrap items-center'>

        <div className='lg:w-1/2 w-full flex flex-col p-5 gap-10 items-start text-lg text-gray-600'>
          <h1 className='lg:text-4xl text-3xl font-semibold text-black'>Luxury Cars & Chauffeurs
          </h1>
          <p>We, at Carpentum Lifestyle Management work around the clock and around the world to ensure your wishes are always fulfilled. You will take care of the dreams and we will take care of the details.</p>
          <p>Whatever you want, whenever you want. No matter the size or time of day, or experienced team will always be on hand to produce. We spend our days creating, cultivating & crafting for the world’s elite. Utilising our global partners & international team to provide you with access to the inaccessible.</p>
          <p>As a Global Lifestyle Management Service provider, we truly understand what it is to provide luxury effortlessly.</p>
          <button className='px-6 py-2 bg-[#1A5830] text-white'>BOOK CONSULTATION</button>
        </div>
        <div className='lg:w-1/2 w-full'>
          <img src="./service-2.jpg" alt="" loading="lazy" className="w-full h-full object-cover object-center" />
        </div>

      </div>
      <div className='lg:w-[85%] w-full mx-auto flex flex-wrap items-center'>
        <div className='lg:w-1/2 w-full'>
          <img src="./card-2.png" alt="" loading="lazy" className="w-full h-full object-cover object-center" />
        </div>
        <div className='lg:w-1/2 p-5 w-full flex flex-col gap-10 items-start text-lg text-gray-600'>
          <h1 className='lg:text-4xl text-3xl font-semibold text-black'>Private Jet & Air Transport
          </h1>
          <p>Beauty is a gift and wellness is a luxury!
            Indulge your senses to countless memorable experiences with unforgettable wellness treats at your fingertips ready to be unwrapped.</p>
          <p>We hold a true passion for wellness, placing your physical, emotional and mental wellbeing at the centre of everything we do.</p>
          <button className='px-6 py-2 bg-[#1A5830] text-white'>BOOK CONSULTATION</button>
        </div>

      </div>
      <Values />



    </div>
  )
}

export default services
