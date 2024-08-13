import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactFooter from '../components/ContactFooter'

const Contact = () => {
    return (
        <section>
            <div className='text-center py-24 my-24 px-5'>
                <p className='lg:text-xl family-montserrat'>Carpentum Lifestyle Management</p>
                <h1 className='family-garamond lg:text-5xl text-3xl text-gray-800 font-semibold'>Your Luxury Concierge, Awaits.</h1>
            </div>
            <div className='lg:w-[80%] w-full  mx-auto'>
                <img src="./contact-bg.jpg" alt="contact" className='object-cover object-center' loading='lazy' />
            </div>


            <ContactForm />
            <ContactFooter />

        </section>
    )
}

export default Contact
