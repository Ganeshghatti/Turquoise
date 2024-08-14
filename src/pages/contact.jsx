import React from 'react'
import ContactForm from '../components/ContactForm'
// import ContactFooter from '../components/ContactFooter'
import { CiChat1 } from "react-icons/ci";

const Contact = () => {
    const phoneNumber = '+91 94496 10077'; 

    

    return (
        <section>
            {/* <ContactFooter /> */}
            <div className='text-center py-24 my-24 px-5'>
                <p className='lg:text-xl family-montserrat'>Carpentum Lifestyle Management</p>
                <h1 className='family-garamond lg:text-5xl text-3xl text-gray-800 font-semibold'>Your Luxury Concierge, Awaits.</h1>
            </div>

            {/* <div className='lg:w-[80%] w-full  mx-auto'>
                <img src="./contact-bg.jpg" alt="contact" className='object-cover object-center' loading='lazy' />
            </div> */}

            <ContactForm />

            {/* Chat Button */}
            <a
                className='fixed bottom-8 right-8 w-12 h-12 bg-[#149088] text-white flex items-center justify-center  rounded-full cursor-pointer animate-bounce' 
               
                href={`https://wa.me/${phoneNumber}`}
                target='_blank'
            >
              <CiChat1 size={25} />
            </a>
        </section>
    )
}

export default Contact;
