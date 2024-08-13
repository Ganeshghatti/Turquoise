import React from 'react'

const ServiceFooter = () => {
  return (
    <div className='h-[40vh] flex md:flex-row flex-col service-footer  md:justify-evenly justify-center gap-10 items-center w-full bg-[#149088] mt-12'>
      <div className='md:text-left text-center text-3xl md:text-5xl text-white md:flex-col flex flex-row gap-2'>
      <h1>Your luxury</h1>
      <h1>concierge, awaits.</h1>
      </div>
      <div>
        <button className='px-4 py-2 bg-white text-gray-800'>BOOK YOUR CONSULTATION</button>
      </div>
    </div>
  )
}

export default ServiceFooter
