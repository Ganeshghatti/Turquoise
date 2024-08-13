import React from 'react'

const ContactForm = () => {
    return (
        <div className='lg:w-2/3 w-full  bg-white  lg:p-24 md:p-12 p-12  shadow-xl '>
            <h1 className='lg:text-4xl text-3xl  text-gray-800 family-montserrat mb-10 font-semibold'>
                Feel free to contact us for more information
            </h1>
            <form className='flex flex-col gap-5'>
                <div className=' md:flex-row flex flex-col gap-5'>
                    <input type="text" className='border px-4 py-2 lg:w-1/2 w-full' placeholder='First Name' required />
                    <input type="text" className='border px-4 py-2 lg:w-1/2 w-full' placeholder='Last Name' required />
                </div>
                <div className='md:flex-row flex flex-col gap-5'>
                    <input type="text" className='border px-4 py-2 lg:w-1/2 w-full' placeholder='Phone Number' required />
                    <input type="email" className='border px-4 py-2 lg:w-1/2 w-full' placeholder='Email Address' required />
                </div>
                <div className='w-full'>
<textarea placeholder='Message' className='px-4 py-2 border w-full resize-none' rows={4}></textarea>
                </div>
                <div className='flex items-center justify-end'>
                    <button type='submit' className='px-12 leading-relaxed font-semibold text-lg py-2 text-white bg-green-800 hover:bg-green-900'>SEND</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
