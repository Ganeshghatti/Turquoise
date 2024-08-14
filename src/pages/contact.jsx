import React from 'react'
import ContactForm from '../components/ContactForm'
// import ContactFooter from '../components/ContactFooter'

const Contact = () => {
    return (
        <section className='relative py-24'>

            {/* <ContactFooter /> */}
            <div className='text-center py-24 my-24 px-5'>
                <p className='lg:text-xl family-montserrat'>Carpentum Lifestyle Management</p>
                <h1 className='family-garamond lg:text-5xl text-3xl text-gray-800 font-semibold'>Your Luxury Concierge, Awaits.</h1>
            </div>

            {/* <div className='lg:w-[80%] w-full  mx-auto'>
                <img src="./contact-bg.jpg" alt="contact" className='object-cover object-center' loading='lazy' />
            </div> */}


            <ContactForm />
            <a href="https://wa.me/6206601056" target='_blank' className='fixed -z-1 bottom-5 right-5'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" alt="" width={80} />
            </a>


        </section>
    )
}

export default Contact
