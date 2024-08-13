import React from 'react'

const ContactFooter = () => {
    const data = [
        {
            id: 1,
            image: "./contact-icon-1.png",
            title: "Phone Number",
            desc: "+971 54 557 3367",
        },
        {
            id: 2,
            image: "./contact-icon-2.png",
            title: "Our Address",
            desc: "Emirates Towers, Level 42 Dubai, United Arab Emirates",
        },
        {
            id: 3,
            image: "./contact-icon-3.png",
            title: "Our Email",
            desc: "info@carpentumlsm.com",
        }

    ]
    return (
        <div className='bg-[#F8F8F8] py-24 mt-24'>
            <div className='flex flex-col gap-10'>
                <h1 className='text-3xl md:text-4xl text-center px-5'>Where You Can Find Us</h1>
                <div className='flex flex-wrap text-center'>
                    {
                        data.map((item) => {
                            return <div className='lg:w-1/3 md:w-1/2 w-full p-5' key={item.id}>
                                <img src={item.image} alt="contact" className='mx-auto' />
                                <h2 className='mt-12 text-3xl mb-3'>{item.title}</h2>
                                <p className='text-gray-600 text-lg'>{item.desc}</p>
                            </div>
                        })
                    }


                </div>

            </div>
        </div>

    )
}

export default ContactFooter
