import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setLoading(true); 

        const loadingToast = toast.loading('Sending message...');

        const form = e.target;

        emailjs.sendForm('service_n8wcu2n', 'template_pp4uwyr', form, '4GwrW1FWSQlQX8pcH')
            .then((result) => {
                toast.dismiss(loadingToast); 
                toast.success("Message Sent successfully.");
                setLoading(false);
            }, (error) => {
                toast.dismiss(loadingToast); 
                toast.error('There was an issue submitting the form. Please try again.');
                setLoading(false);
            });

        form.reset(); 
    };

    return (
        <div className="flex justify-center px-5 my-12 lg:px-0">
            <div className="lg:w-[60%] w-full bg-white lg:p-24 md:py-12 py-5 px-5 custom-shadow">
                <h1 className="lg:text-4xl md:text-3xl text-2xl text-gray-800 font-montserrat mb-10 font-medium">
                    Feel free to contact us for more information
                </h1>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-5">
                        <input 
                            type="text" 
                            className="border border-gray-300 px-4 py-2 lg:w-1/2 w-full focus:outline-none focus:border-gray-500" 
                            placeholder="First Name" 
                            name="firstName" 
                            required 
                        />
                        <input 
                            type="text" 
                            className="border border-gray-300 px-4 py-2 lg:w-1/2 w-full focus:outline-none focus:border-gray-500" 
                            placeholder="Last Name" 
                            name="lastName" 
                            required 
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <input 
                            type="text" 
                            className="border border-gray-300 px-4 py-2 lg:w-1/2 w-full focus:outline-none focus:border-gray-500" 
                            placeholder="Phone Number" 
                            name="phone" 
                            required 
                        />
                        <input 
                            type="email" 
                            className="border border-gray-300 px-4 py-2 lg:w-1/2 w-full focus:outline-none focus:border-gray-500" 
                            placeholder="Email Address" 
                            name="email" 
                            required 
                        />
                    </div>
                    <div className="w-full">
                        <textarea 
                            placeholder="Message" 
                            name="message" 
                            className="border border-gray-300 px-4 py-2 w-full resize-none focus:outline-none focus:border-gray-500" 
                            rows={4}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className={`px-12 leading-relaxed font-semibold text-lg py-2 text-white bg-[#149088] hover:bg-[#054847] transition-colors duration-200 ${
                                loading ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                            disabled={loading} 
                        >
                            {loading ? 'Sending...' : 'SEND'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
