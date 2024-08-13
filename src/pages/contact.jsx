import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactFooter from '../components/ContactFooter'

const Contact = () => {
    return (
        <section>
            <div className='text-center py-24'>
                <p className='text-xl family-montserrat'>Carpentum Lifestyle Management</p>
                <h1 className='family-garamond lg:text-5xl text-3xl text-gray-800 font-semibold'>Your Luxury Concierge, Awaits.</h1>
            </div>
            <div className='lg:w-[80%] w-full  mx-auto '>
                <img src="https://carpentumlsm.com/wp-content/uploads/2022/05/ishan-seefromthesky-GSZQ_eupukE-unsplash-1536x863.jpg" alt="" className='object-cover object-center' loading='lazy' />
            </div>
<div className='flex justify-end -mt-16'>
    
<ContactForm />
</div>
           
          <div className='bg-[#F8F8F8] py-24 mt-24'>
          <ContactFooter />
          </div>
        </section>
    )
}

export default Contact
