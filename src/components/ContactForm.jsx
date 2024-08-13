import React from 'react'

const ContactForm = () => {
    return (
        <div className='flex justify-center px-5 my-24 lg:px-0'>
            <div className='lg:w-[60%] w-full form  bg-white  lg:p-24  md:py-12 py-5 px-5  shadow-xl '>
                <h1 className='lg:text-4xl md:text-3xl text-2xl  text-gray-800 family-montserrat mb-10 font-medium'>
                    Feel free to contact us for more information
                </h1>
                <form className='flex flex-col gap-5' action='https://formsubmit.co/jhatnb@gmail.com' method='post'>
                    <div className=' md:flex-row flex flex-col gap-5'>
                        <input type="text" className='border px-4 py-2 lg:w-1/2 w-full' placeholder='First Name' name='firstName' required />
                        <input type="text" className='border px-4 py-2 lg:w-1/2 w-full' placeholder='Last Name' name='lastName' required />
                    </div>
                    <div className='md:flex-row flex flex-col gap-5'>
                        <input type="text" className='border px-4 py-2 lg:w-1/2 w-full' placeholder='Phone Number' name='phone' required />
                        <input type="email" className='border px-4 py-2 lg:w-1/2 w-full' placeholder='Email Address' name='email' required />
                    </div>
                    <div className='w-full'>
                        <textarea placeholder='Message' name='message' className='px-4 py-2 border w-full resize-none' rows={4}></textarea>
                    </div>
                    <div className='flex items-center justify-end'>
                        <button type='submit' className='px-12 leading-relaxed font-semibold text-lg py-2 text-white bg-green-800 hover:bg-green-900'>SEND</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ContactForm
