import React from 'react'

const Service = () => {
    return (
        <div className='container mx-auto flex flex-wrap items-center my-10'>
            <div className='lg:w-1/2 w-full'>
                <img src="https://images.unsplash.com/photo-1502700559166-5792585222ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className='lg:w-1/2 w-full flex flex-col gap-10 items-start'>
            <h1 className='lg:text-4xl text-3xl font-bold'>Travel Design</h1>
            <p>Welcome to our world of luxury tailor-made travel. Our dedicated global network of travel specialistsx unearth the most amazing destinations and curate bespoke travel experiences. From luxury hotels to the finest resorts, private islands, and alpine retreats, we plan and curate one-of-a-kind holidays, tailored to personal desires.</p>
            <p>Our dedicated travel specialists have journeyed across the globe to personally experience the world’s best destinations and travel experiences. From luxury beach resorts and alpine retreats to country houses, desert safaris and treetop escapes, they are experts at creating bespoke travel packages for romantic getaways, special reunions, and honeymoons our customers will treasure forever.</p>
            <button className='px-6 py-2 bg-[#1A5830] text-white'>BOOK CONSULTATION</button>
            </div>

        </div>
    )
}

export default Service
