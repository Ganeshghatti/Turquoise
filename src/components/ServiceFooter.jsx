import React from 'react'

const ServiceFooter = () => {
  return (
    <div className='h-[40vh] flex md:flex-row flex-col service-footer  md:justify-evenly justify-center gap-10 items-center w-full bg-[#149088] mt-12'>
      <h1 className='md:text-5xl text-3xl text-white text-center md:text-left'>Your luxury <br className='md:block hidden' />concierge, awaits.</h1>
      <button className='px-12 py-4 bg-white text-gray-800'>BOOK YOUR CONSULTATION</button>
    </div>
  )
}

export default ServiceFooter
